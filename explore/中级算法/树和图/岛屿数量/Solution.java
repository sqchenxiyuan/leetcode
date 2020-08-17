class Solution {

    private int[][] dirctions = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};

    public int numIslands(char[][] grid) {
        int m = grid.length;
        if(m == 0) return 0;
        int n = grid[0].length;
        if(n == 0) return 0;

        int count = 0;
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == '1'){
                    count++;
                    findLand(grid, m, n, i, j);
                }
            }
        }
        return count;
    }

    private void findLand(char[][] grid, int m, int n, int x, int y){
        Queue<int[]> queue = new LinkedBlockingQueue<>();
        queue.add(new int[]{x, y});
        while(!queue.isEmpty()){
            int[] position = queue.poll();
            for(int[] d : dirctions){
                int i = position[0] + d[0];
                int j = position[1] + d[1];
                if(i >= 0 && i < m && j >= 0 && j < n){
                    if(grid[i][j] == '1'){
                        queue.add(new int[]{i, j});
                        grid[i][j] = '0';
                    }
                }
            }
        }
    }
}