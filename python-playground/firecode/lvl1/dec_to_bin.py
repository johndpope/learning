#!/usr/bin/env python
def dec_to_bin(number):
	binary_representation = ""
	while number != 0:
		if number % 2 > 0:
			binary_representation += "1"
		else:
			binary_representation += "0"
		number = number / 2
	return binary_representation[::-1]

def main():
	print dec_to_bin(10)

if __name__ == "__main__":
    main()

