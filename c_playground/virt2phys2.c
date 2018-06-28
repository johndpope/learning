#include<stdio.h>
#include<string.h>
#include<stdlib.h>

int main(int argc, char**argv) {
    if (argc!=2) {
        printf("INVALID NUMBER OF ARGUMENTS.\n");
        return 0;
    }

    char * pageTableFile = argv[1];
    FILE *fp;

    fp = fopen(pageTableFile, "r");
    char access[25];
    unsigned int hex_in;
    int third_in;
    unsigned long fourth_in;
    if (fp) {
        while ((fscanf(fp, "%s 0x%x %d", access, &hex_in, &third_in)) != EOF) {
            printf("%s\t", access);
            printf("0x%x\t", hex_in);
            printf("%d\t", third_in);
            if(strcmp(access,"load") != 0) {//if it isn't load, i.e. there is a fourth value
                fscanf(fp, "%lx", &fourth_in);
                printf("%lx",fourth_in);
            }
            printf("\n");
        }
        return 0;
    } else {
        printf("%s DOES NOT EXIST.\n", pageTableFile);
        return 0;
    }
}
