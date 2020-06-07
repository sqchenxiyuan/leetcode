import java.util.Arrays;

public class Solution {
    public int minCost(int[] houses, int[][] cost, int m, int n, int target) {
        int[][][] dp = new int[m][target + 1][n];//前t个房子涂了i个颜色最后一个颜色为j的情况的花销
        for(int t = 0; t < m; t++){
            for(int i = 1; i <= target; i++){
                Arrays.fill(dp[t][i], -1);
            }
        }

        for(int i = 0; i < n; i++) {
            for(int t = 0; t < m; t++){
                int pre = t == 0 ? 0 : dp[t - 1][1][i];
                System.out.println(t + "," + 1 + "," + i);
                if(houses[t] == i + 1){
                    dp[t][1][i] = pre;
                    System.out.println(t + "," + 1 + "," + i + "," + dp[t][1][i]);
                } else if (houses[t] == 0){
                    dp[t][1][i] = pre + cost[t][i];
                    System.out.println(t + "," + 1 + "," + i + "," + dp[t][1][i]);
                } else {
                    break;
                }
            }
        }

        for(int t = 1; t < m; t++){
            for(int i = 2; i <= target; i++){
                for(int j = 0; j < n; j++){
                    int min = Integer.MAX_VALUE;

                    if(houses[t] == j + 1 || houses[t] == 0){
                        int pay =  houses[t] == j + 1 ? 0 : cost[t][j];
                        for(int x = 0; x < n; x++){
                            if(x == j){
                                if(dp[t - 1][i][j] >= 0){
                                    min = Math.min(min, dp[t - 1][i][j] + pay);
                                }
                            } else {
                                if(dp[t - 1][i - 1][x] >= 0){
                                    min = Math.min(min, dp[t - 1][i - 1][x] + pay);
                                }
                            }
                        }
                    }

                    if(min != Integer.MAX_VALUE){
                        dp[t][i][j] = min;
                    }
                    System.out.println(t + "," + i + "," + j + "," + dp[t][i][j]);
                }
            }
        }

        int res = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++){
            if(dp[m - 1][target][i] >= 0){
                res = Math.min(res, dp[m - 1][target][i]);
            }
        }

        return res == Integer.MAX_VALUE ? -1 : res;
    }
}
