#include<stdio.h>
#include<string.h>
#include<stdlib.h>
int logBaseTwo(int);

int main(int argc, char**argv) {
    if (argc!=3) {
        printf("INVALID NUMBER OF ARGUMENTS.\n");
        return 0;
    }

    char * pageTableFile = argv[1];
    int virtualAddress = strtol(argv[2], NULL, 16);
    FILE *fp;

    fp = fopen(pageTableFile, "r");
    int i = 0;
    char line[10];
    if (fp) {
        int addressBits;
        int pageSize;           
        while ((fscanf(fp, "%s", line)) != EOF) {
            if (i == 0) {
                addressBits = atoi(line);
            } else if (i == 1) {
                pageSize = atoi(line);
            } else {
                int pageSizeBits = logBaseTwo(pageSize);
                int pageTotalBits = addressBits - pageSizeBits;
                int physicalAddress = 0;
                /** 
                 * This is to ignore any MSB passed the number of valid page bits.
                 * Not sure if we need this. We would need this if we wanted to only take the valid
                 * amount of bits for our input.
                 *
                 * int pageIndex = (virtualAddress >> pageSizeBits) & (pageSizeBits - 1); 
                **/
                int pageIndex = (virtualAddress >> pageSizeBits);
                if (i == (pageIndex + 2)) {
                    if (strcmp(line, "-1") == 0) {
                        printf("PAGEFAULT\n");
                        return 0;
                    }
                    physicalAddress = strtol(line, NULL, 16) << pageSizeBits;
                    physicalAddress |= (virtualAddress & pageSize - 1);
                    printf("%x\n", physicalAddress);
                    return 0;
                }               
            }
            i++;
        }
        return 0;
    } else {
        printf("%s DOES NOT EXIST.\n", pageTableFile);
        return 0;
    }
}

int logBaseTwo(int num) {
    int count = 0;
    while ((num & 1) == 0 && num > 1) {
        num >>= 1;
        count++;
    }
    return count;
}