import java.util.*;

class Solution {
    private int[][] dirs = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};

    public boolean containsCycle(char[][] grid) {
        int m = grid.length;
        if(m == 0) return false;
        int n = grid[0].length;
        if(n == 0) return false;

        boolean[][] viewed = new boolean[m][n];
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(viewed[i][j]) continue;
                if(start(grid, i, j, viewed)) return true;
            }
        }
        return false;
    }

    private boolean start(char[][] grid, int x, int y, boolean[][] viewed){
        int m = grid.length;
        int n = grid[0].length;
        viewed[x][y] = true;

        char c = grid[x][y];
        for(int[] d : dirs){
            int nx = x + d[0];
            int ny = y + d[1];
            if(nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if(helper(grid, c, nx, ny, x, y, viewed)) return true;
        }
        return false;
    }

    private boolean helper(char[][] grid, char target, int x, int y, int ox, int oy, boolean[][] viewed){
        char c = grid[x][y];
        if(c != target) return false;
        if(viewed[x][y]) return true;
        viewed[x][y] = true;

        int m = grid.length;
        int n = grid[0].length;
        for(int[] d : dirs){
            int nx = x + d[0];
            int ny = y + d[1];
            if(nx < 0 || nx >= m || ny < 0 || ny >= n || (nx == ox && ny == oy)) continue;
            if(helper(grid, c, nx, ny, x, y, viewed)) return true;
        }

        return false;
    }
}