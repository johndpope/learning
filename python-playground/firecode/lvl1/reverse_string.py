#!/usr/bin/env python
def reverse_string(a_string):
    length = len(a_string)
    reverse = a_string
    if length > 1:
    	reverse = ''
        for index, char in enumerate(a_string):
           reverse += a_string[-1-index]
    
    return reverse

def main():
	print reverse_string('Python')

if __name__ == "__main__":
    main()