import java.util.*;

class Solution {

    private int[][] dirs = new int[][]{{-1,0},{1,0},{0,-1},{0,1}};
    private int landCount = 0;
    private int landSize = 0;
    private int minLink = 4;
    private List<int[]> link2List = new ArrayList<>();

    public int minDays(int[][] grid) {
        int m = grid.length;
        if(m == 0) return 0;
        int n = grid[0].length;
        if(n == 0) return 0;

        countLand(grid, m ,n);
        if(landCount > 1) return 0;
        if(landSize <= 2) return landSize;
        if(minLink == 1) return minLink;

        for(int[] p : link2List){
            int i = p[0];
            int j = p[1];
            int[] from = null;
            int[] to = null;
            for(int[] d : dirs){
                int x = i + d[0];
                int y = j + d[1];
                if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == 0) continue;
                if(from == null){
                    from = new int[]{x,y};
                } else {
                    to = new int[]{x,y};
                }
            }
            boolean[][] viewed = new boolean[m][n];
            viewed[i][j] = true;
            if(!gotoSome(grid, m, n, viewed, from, to)){
                return 1;
            }
        }
        return 2;
    }

    private void countLand(int[][] grid, int m, int n){
        boolean[][] viewed = new boolean[m][n];
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 0 || viewed[i][j]) continue;
                landCount++;
                help(grid, m, n, viewed, i, j);
            }
        }
    }
    
    private void help(int[][] grid, int m, int n, boolean[][] viewed, int i, int j){
        if(viewed[i][j]) return;
        landSize++;
        viewed[i][j] = true;
        int linkCount = 0;
        for(int[] d : dirs){
            int x = i + d[0];
            int y = j + d[1];
            if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == 0) continue;
            help(grid, m, n, viewed, x, y);
            linkCount++;
        }
        minLink = Math.min(minLink, linkCount);
        if(linkCount == 2){
            link2List.add(new int[]{i,j});
        }
    }

    private boolean gotoSome(int[][] grid, int m, int n, boolean[][] viewed, int[] from, int[] to){
        if(viewed[from[0]][from[1]]) return false;
        if(from[0] == to[0] && from[1] == to[1]) return true;
        int i = from[0];
        int j = from[1];
        viewed[i][j] = true;
        for(int[] d : dirs){
            int x = i + d[0];
            int y = j + d[1];
            if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == 0) continue;
            if(gotoSome(grid, m, n, viewed, new int[]{x, y}, to)) return true;
        }
        return false;
    }
}
