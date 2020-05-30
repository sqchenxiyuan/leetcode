public class Solution {
    public int cherryPickup(int[][] grid) {
        //dp[left][right][y] = dp[left - 1][right - 1] + y
        int m = grid.length;
        int n = grid[0].length;
        int[][][] dp = new int[n][n][m];

        for(int i = m - 1; i >= 0; i--){
            for(int left = 0; left < n; left++){
                for(int right = left; right < n; right++){
                    int res = left == right ? grid[i][left] : grid[i][left] + grid[i][right];

                    if(i < m - 1){
                        int max = Integer.MIN_VALUE;
                        for(int x = -1; x <= 1; x++){
                            for(int y = -1; y <= 1; y++){
                                int nl = left+x;
                                int nr = right+y;
                                if(nl <= nr && nl >= 0 && nl < n && nr >= 0 && nr < n){
                                    max = Math.max(dp[nl][nr][i + 1], max);
                                }
                            }
                        }
                        res += max;
                    }

                    dp[left][right][i] = res;
                }
            }
        }

        return dp[0][n - 1][0];
    }

    public static void main(String[] args) {
        new Solution().cherryPickup(new int[][]{{3,1,1},{2,5,1},{1,5,5},{2,1,1}});
    }
}