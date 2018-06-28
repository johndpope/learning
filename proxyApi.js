 /*
 * API PROXY
 * Able to access the aggregate_api via a GET request
 * @param {Object} req Request object.
 * @param {Object} res Response object.
 * @returns {Object} Aggregate API object response
 */
exports.proxyAggregateApi = function (req, res) {
	if (req.method != 'GET') {
		console.error(`Error: Not a GET request.`);
		res.status(500).send();
	}

	const path = req.path;
	const originalURL = req.originalUrl;
	const aggregateURL = constructURL(originalURL);
	const options = {
		uri: aggregateURL,
		json: true
	};
	res.setHeader('Content-Type','application/json');
    rp(options)
	.then((body) => {
		res.send(body);
	})
    // Error Handling.
    .catch((err) => {
        console.error(`There was an error: ${err}`);
        res.status(err.status || 500).send('{}');
    })

	/*
	 * Constructs according url based on params
	 * @param {String} Original URL string without domain
	 * @returns {String} URL to call GET request on
	 */
	function constructURL(originalURL) {
		const BASE_URL = `https://www.cbc.ca/aggregate_api/v1`;
		return `${BASE_URL}${originalURL}`;
	}
}