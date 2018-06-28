#!/usr/bin/env python
def flip_vertical_axis(matrix):
    i = 0
    for r in matrix:
        matrix[i] = r[::-1]
        print matrix[i]
        i = i + 1

def main():
    flip_vertical_axis([[0,1],[1,0]])

if __name__ == "__main__":
    main()

