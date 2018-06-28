package practice;

import java.util.*;	

public class NumIslands {
	public static int getRegionSize(int[][] matrix, int row, int col, boolean[][] visited) {
		if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
			return 0;
		}
		if (matrix[row][col] == 0 || visited[row][col] == true) {
			return 0;
		}
		visited[row][col] = true;
		for (int r = row - 1; r <= row + 1; r++) {
			for (int c = col - 1; c <= col + 1; c++) {
				if (!(r == row && c == col))
					getRegionSize(matrix, r, c, visited);
			}
		}
		return 1;
	}
	
	public static int getBiggestRegion(int[][] matrix) {
		int numIslands = 0;
		boolean[][] visited = new boolean[matrix.length][matrix[0].length];
		
		
		for (int row = 0; row < matrix.length; row++) {
			for (int col = 0; col < matrix[row].length; col++) {
				if (matrix[row][col] == 1 && visited[row][col] == false) {
					numIslands += getRegionSize(matrix, row, col, visited);
				}
			}
		}
		
		return numIslands;
	}
	
	public static void main(String[] args) {
		int[][] matrix = new int[][] {
			{0,0,0,1,1,0,0},
			{0,1,0,0,1,1,0},
			{1,1,0,1,0,0,1},
			{0,0,0,0,0,0,0},
			{1,1,0,0,0,0,1},
			{0,0,0,1,0,0,1},
		};
		int numIslands = getBiggestRegion(matrix);
		System.out.println("The biggest region is of size: " + numIslands);
	}
}
