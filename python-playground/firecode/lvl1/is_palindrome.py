#!/usr/bin/env python
def is_palindrome(input_string):
	length = len(input_string);
	palindrome = True
	for i in range(length):
		if input_string[i] != input_string[length - i - 1]:
			palindrome = False
	return palindrome

def main():
	print is_palindrome('racecar')

if __name__ == "__main__":
    main()

