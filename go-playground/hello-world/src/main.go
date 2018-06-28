package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "net/url"
    // "time"
)

const STORIES_PAGE_SIZE = "25"
const LOCAL_PAGE_SIZE = "5"
const TYPE_SET = "cbc-ocelot"
const DEFAULT_SOURCE = "Polopoly"
const DEFAULT_PAGE = "1"

func main() {
    http.HandleFunc("/", Mux)

    log.Println("Listening on port 3000")
    if err := http.ListenAndServe(":3000", nil); err != nil {
        log.Fatalln(err)
    }
}

func Mux(w http.ResponseWriter, r *http.Request) {
    params := r.URL.Query()
    action := params.Get("action")
    log.Println("ACTION VALUE ***", action, "***")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    if len(params) == 0 || len(action) < 1 {
        w.WriteHeader(http.StatusNotFound)
        fmt.Fprintf(w, "Missing action parameter from request.")
        log.Println("Missing action parameter from request.")
        return
    }
    switch action {
    case "aggregator":
        w.Header().Set("Content-Type", "application/json")
        jsonToReturn := Aggregator(params)
        fmt.Fprintf(w, "%s", jsonToReturn)
        return
    case "landing":
        w.Header().Set("Content-Type", "application/json")
        storiesParams := url.Values{}
        storiesParams.Add("typeSet", TYPE_SET)
        storiesParams.Add("pageSize", STORIES_PAGE_SIZE)
        storiesParams.Add("page", DEFAULT_PAGE)
        storiesParams.Add("orderLineupId", params.Get("storiesLineupId"))
        storiesParams.Add("inline", "relatedLinks")
        storiesParams.Add("categoryIds", "140")
        storiesParams.Add("source", DEFAULT_SOURCE)
        jsonStories := Aggregator(storiesParams)
        fmt.Fprintf(w, "%s", jsonStories)
        return
        // jsonCategories := Categories(params)
        // jsonLocal
    default:
        w.WriteHeader(http.StatusNotFound)
        fmt.Fprintf(w, "Invalid Action")
        log.Println("Invalid Action")
        return
    }

    log.Println("Url Param 'action' is " + action)
}

func Aggregator(params url.Values) []byte {
    uri := AggregatorInit(params)

    log.Println("\n***AGGREGATOR CALLED***\n",uri);

    /*client := http.Client {
        Timeout: time.Second * 2,
    }
    req, err := http.NewRequest(http.MethodGet, uri, nil)
    if err != nil {
        log.Fatal("err", err)
    }
    res, getErr := client.Do(req)
    if getErr != nil {
        log.Fatal("getErr", getErr)
    }*/
    res, _ := http.Get(uri)

    body, readErr := ioutil.ReadAll(res.Body)
    if readErr != nil {
        log.Fatal("readErr", readErr)
    }

    var response AggregateItem
    var responseError AggregateError
    var jsonToReturn []byte
    var resErr error

    jsonErr := json.Unmarshal(body, &response)
    if jsonErr != nil {
        jsonErr = json.Unmarshal(body, &responseError)
        if jsonErr != nil {
            log.Fatal("jsonErr", jsonErr)
        }
    }

    /***********************************/
    /*****DATA PROCESSING GOES HERE*****/

    if response != nil {
         log.Println("\n\nTEST",response[0].ID,"\n\n")
    }

    /***********************************/


    if response != nil {
        jsonToReturn, resErr = json.Marshal(response)
    } else {
        jsonToReturn, resErr = json.Marshal(responseError)
    }
    if resErr != nil {
        log.Fatal("Cannot encode to JSON", resErr)
    }
    return jsonToReturn
}

// Initialize Aggregator to build client string
func AggregatorInit(params url.Values) string {
    uri := "https://www.cbc.ca/aggregate_api/v1/items"
    u, _ := url.Parse(uri)
    q, _ := url.ParseQuery(u.RawQuery)
    delete(params, "action")
    for k, v := range params {
        q.Add(k,v[0])
    }
    u.RawQuery = q.Encode()
    return u.String()
}

type AggregateError struct {
    Error           string  `json:"error"`
    Description     string  `json:"description"`
}

type AggregateItem []struct {
    ID                  int    `json:"id"`
    Title               string `json:"title"`
    Description         string `json:"description"`
    Source              string `json:"source"`
    SourceID            string `json:"sourceId"`
    PublishedAt         int64  `json:"publishedAt"`
    ReadablePublishedAt string `json:"readablePublishedAt"`
    UpdatedAt           int64  `json:"updatedAt"`
    ReadableUpdatedAt   string `json:"readableUpdatedAt"`
    Type                string `json:"type"`
    TypeAttributes      struct {
        URLSlug             string        `json:"urlSlug"`
        ContextualHeadlines []interface{} `json:"contextualHeadlines"`
        CommentsSectionID   string        `json:"commentsSectionId"`
        Flag                string        `json:"flag"`
        SectionLabels       []string      `json:"sectionLabels"`
        ShowSlug            string        `json:"showSlug"`
        Author              struct {
            Name  string `json:"name"`
            Image string `json:"image"`
        } `json:"author"`
        Flags struct {
            Status string `json:"status"`
            Label  string `json:"label"`
        } `json:"flags"`
        Show            string `json:"show"`
        ImageLarge      string `json:"imageLarge"`
        DisplayComments bool   `json:"displayComments"`
        URL             string `json:"url"`
        ImageSmall      string `json:"imageSmall"`
        Categories      []struct {
            ID                  int    `json:"id"`
            Name                string `json:"name"`
            Image               string `json:"image"`
            Priority            int    `json:"priority"`
            PriorityWhenInlined int    `json:"priorityWhenInlined"`
            Metadata            struct {
                Tracking struct {
                    Subsection1 string `json:"subsection1"`
                    Subsection2 string `json:"subsection2"`
                    Subsection3 string `json:"subsection3"`
                    Subsection4 string `json:"subsection4"`
                    Contentarea string `json:"contentarea"`
                    Contenttype string `json:"contenttype"`
                } `json:"tracking"`
                AdHierarchy        string `json:"adHierarchy"`
                PolopolyDeptName   string `json:"polopolyDeptName"`
                PolopolyExternalID string `json:"polopolyExternalId"`
                OrderLineupID      string `json:"orderLineupId"`
                MpxCategoryName    string `json:"mpxCategoryName"`
                PageTitle          string `json:"pageTitle"`
                PageDescription    string `json:"pageDescription"`
            } `json:"metadata"`
            BannerImage string `json:"bannerImage,omitempty"`
        } `json:"categories"`
        ImageAspects string   `json:"imageAspects"`
        SectionList  []string `json:"sectionList"`
    } `json:"typeAttributes"`
}
