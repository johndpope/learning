#!/usr/bin/env python
def transpose_matrix(matrix):
	i, j = 0, 0
	r, c = len(matrix), len(matrix[0])
	for i in range(r/2):
		for j in range(c):
			temp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
			j = j + 1
		i = i + 1

	return matrix


def main():
    print transpose_matrix([[1,2],[3,4]])

if __name__ == "__main__":
    main()
