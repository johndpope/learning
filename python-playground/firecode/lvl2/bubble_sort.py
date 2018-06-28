#!/usr/bin/env python
def bubble_sort(a_list):
    for pass_num in range(len(a_list) - 1, 0, -1):
    	for i in range(pass_num):
    		if a_list[i] > a_list[i + 1]:
    			bigger = a_list[i]
    			a_list[i] = a_list[i + 1]
    			a_list[i + 1] = bigger

    return a_list


def main():
    print bubble_sort([8,2,6,4,3,3,5])

if __name__ == "__main__":
    main()

