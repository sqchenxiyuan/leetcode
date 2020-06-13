import java.util.Arrays;

public class Solution {
    public int minDistance(int[] houses, int k) {
        Arrays.sort(houses);
        //dp[i][j] 前i个房子 用k个邮箱
        //
        if(houses.length == k) return 0;
        int len = houses.length;
        int[][] min = new int[len][len]; //i - j的中间放个邮箱的最小值
        for(int i = len - 1; i >= 0; i--){
            for(int j = i; j < len; j++){
                if(i == j) min[i][j] = 0;
                else if(i == j - 1) min[i][j] = houses[j] - houses[i];
                else min[i][j] = houses[j] - houses[i] + min[i + 1][j - 1];
            }
        }


        int[][] dp = new int[houses.length][k];
        //dp[0][j] = 0
        //dp[i][1]

        for(int h = 0; h < houses.length; h++){
            for(int y = 0; y < k; y++){
                int x = 0;
                if(y == 0){ //第一个
                    x = min[0][h];
                } else { //使用新的邮箱
                    x = dp[h][y - 1];//少一个邮箱的值
                    for(int p = 0; p < h; p++){
                        x = Math.min(dp[p][y - 1] + min[p + 1][h], x);
                    }
                }
                dp[h][y] = x;
            }
        }

        return dp[houses.length - 1][k - 1];
    }
}
