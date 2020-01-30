/*
 * @lc app=leetcode id=463 lang=java
 *
 * [463] Island Perimeter
 */

// @lc code=start
public class Solution {
    static int[][] dirctions = new int[][]{
        {1,0},{0,1},{-1,0},{0,-1}
    };

    public int islandPerimeter(int[][] grid) {
        int m = grid.length;
        if(m == 0) return 0;
        int n = grid[0].length;
        if(n == 0) return 0;

        int[][] viewed = new int[m][n];

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 0) continue;
                else return findPerimeter(i, j, m, n,grid, viewed);
            }
        }
        return 0;
    }

    private int findPerimeter(int i, int j, int m, int n,int[][] grid, int[][] viewed){
        if(viewed[i][j] == 1) return 0;
        viewed[i][j] = 1;
        int result = 0;
        for(int[] dirc : dirctions){
            int dx = i + dirc[0];
            int dy = j + dirc[1];
            if(dx < 0 || dx >= m ||dy < 0 || dy>=n) result++;
            else if(grid[dx][dy] == 0) result++;
            else result += findPerimeter(dx, dy, m,n,grid,viewed);
        }
        return result;
    }
}
// @lc code=end

