#!/usr/bin/env python
def flip_horizontal_axis(matrix):
    r = len(matrix) - 1
    c = len(matrix[0]) - 1
    i = 0
    j = 0
    while i <= r/2 :
    	while j <= c:
    		temp = matrix[i][j]
    		matrix[i][j] = matrix[r-i][j]
    		matrix[r-i][j] = temp
    		j = j + 1
    	i = i + 1
    print matrix

def main():
    flip_horizontal_axis([[0,1],[1,0]])

if __name__ == "__main__":
    main()

