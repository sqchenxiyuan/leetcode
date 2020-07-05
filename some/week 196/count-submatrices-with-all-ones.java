public class Solution {
    public int numSubmat(int[][] mat) {
        int m = mat.length;
        if(m == 0) return 0;
        int n = mat[0].length;
        if(n == 0) return 0;

        int res = 0;
        for(int x = 0; x < m; x++){
            for(int y = 0; y < n; y++){
                if (mat[x][y] == 0) continue;
                boolean[][] dp = new boolean[m][n];
                for(int i = x; i < m; i++){
                    for(int j = y; j < n; j++){
                        if (mat[i][j] == 1){
                            if(i == x && j == y
                                    || i == x && dp[i][j - 1]
                                    || j == y && dp[i - 1][j]
                                    || dp[i - 1][j] && dp[i][j - 1]){
                                // System.out.println(i + "|" + j);
                                dp[i][j] = true;
                                res++;
                            } else {
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
        }

        return res;
    }

    public static void main(String[] args) {
        new Solution().numSubmat(new int[][]{{0,1,1,0},{0,1,1,1},{1,1,1,0}});
    }
}
