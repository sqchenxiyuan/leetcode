class Solution {

    private int[][] dirs = new int[][]{{-1,-1},{0,-1},{1,-1},{-1,0},{1,0},{-1,1},{0,1},{1,1}};

    public void gameOfLife(int[][] board) {
        int m = board.length;
        if(m == 0) return;
        int n = board[0].length;
        if(n == 0) return;

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                int count = 0;
                for(int[] d : dirs){
                    int x = i + d[0];
                    int y = j + d[1];
                    if(x < 0 || x >= m || y < 0 || y >= n) continue;
                    if(board[x][y] >= 1){
                        count++;
                    }
                }
                if(board[i][j] == 0 && count == 3){
                    board[i][j] = -1;//即将变活
                } else if(board[i][j] == 1 && (count < 2 || count > 3)){
                    board[i][j] = 2;//即将死去
                }
            }
        }

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(board[i][j] == -1){
                    board[i][j] = 1;
                } else if(board[i][j] == 2){
                    board[i][j] = 0;
                }
            }
        }
    }
}