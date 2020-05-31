public class Solution {
    public double getProbability(int[] balls) {
        //dp[t][i][j][u][v] 放了t种球后，左边i个右边j个，左边u种颜色，右边v种颜色
        int len = balls.length;
        int n = 0;
        for(int b : balls){
            n += b;
        }
        if(n % 2 == 1) return 0;
        n = n / 2;

        int[][] C = new int[n + 1][n + 1];
        C[0][0] = 1;
        for (int i = 1; i <= n; ++i){
            C[i][0] = 1;
            for (int j = 1; j <= i; ++j){
                C[i][j] = C[i - 1][j] + C[i - 1][j - 1];
            }
        }

        double[][][][][] dp = new double[len + 1][n + 1][n + 1][len + 1][len + 1];
        dp[0][0][0][0][0] = 1;
        for(int t = 1; t <= len; t++){
            int x = balls[t - 1];

            //全部分到一边
            for(int i = x; i <= n; i++){
                for(int j = 0; j <= n; j++){
                    for(int u = t; u >= 1; u--){
                        for(int v = 0; v <= t; v++){
                            dp[t][i][j][u][v] += dp[t - 1][i - x][j][u - 1][v] * C[i][x];
                            dp[t][j][i][v][u] += dp[t - 1][j][i - x][v][u - 1] * C[i][x];
                        }
                    }
                }
            }

            //分到两边
            for(int b = 1; b < x; b++){
                for(int i = n; i >= b; i--){
                    for(int j = n; j >= x - b; j--){
                        for(int u = t; u >= 1; u--){
                            for(int v = t; v >= 1; v--){
                                dp[t][i][j][u][v] += dp[t - 1][i - b][j - (x - b)][u - 1][v - 1] * C[i][b] * C[j][x - b];
                            }
                        }
                    }
                }
            }
        }
        double total = 0, ans = 0;
        for (int i = 0; i <= len; ++i)
            ans += dp[len][n][n][i][i];
        for (int i = 0; i <= len; ++i)
            for (int j = 0; j <= len; ++j)
                total += dp[len][n][n][i][j];
        return ans /total;
    }
}