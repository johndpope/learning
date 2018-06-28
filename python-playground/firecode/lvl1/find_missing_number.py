#!/usr/bin/env python
def find_missing_number(list_numbers):
	return 55 - sum(list_numbers)

def main():
	print find_missing_number([1,2,3,4,6,7,8,9,10])

if __name__ == "__main__":
    main()