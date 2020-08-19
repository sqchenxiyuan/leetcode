class Solution {
    private int[][] directions = new int[][]{{1,0},{0,1},{-1,0},{0,-1}};

    public boolean exist(char[][] board, String word) {
        int m = board.length;
        if(m == 0) return false;
        int n = board[0].length;
        if(n == 0) return false;

        char[] chars = word.toCharArray();
        boolean[][] viewed = new boolean[m][n];
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(chars[0] == board[i][j]){
                    if(help(board, i, j, viewed, 0, chars)) return true;
                }
            }
        }
        return false;
    }

    private boolean help(char[][] board, int x, int y, boolean[][] viewed, int i, char[] chars){
        int m = board.length;
        int n = board[0].length;

        if(board[x][y] != chars[i]) return false;
        if(i == chars.length - 1) return true;

        viewed[x][y] = true;
        for(int[] d : directions){
            int nx = x + d[0];
            int ny = y + d[1];
            if(nx >= 0 && nx < m && ny >= 0 && ny < n && !viewed[nx][ny]){
                if(help(board, nx, ny, viewed, i + 1, chars)) return true;
                
            }
        }
        viewed[x][y] = false;

        return false;
    }
}