/*
 * @lc app=leetcode id=486 lang=java
 *
 * [486] Predict the Winner
 */

// @lc code=start
public class Solution {
    public boolean PredictTheWinner(int[] nums) {
        int len = nums.length;
        int[][] dp = new int[len][len];//dp[i][j]表示从i到j的先手比后手赢多少分 dp[i][j] = max(-dp[i + 1][j] + num[i], -dp[i][j - 1] + num[j])
        for(int i = len - 1; i >= 0; i--){
            for(int j = i; j < len; j++){
                if(i == j){
                    dp[i][j] = nums[i];
                } else {
                    int c1 = (i < len - 1) ? nums[i] - dp[i + 1][j] : Integer.MIN_VALUE;
                    int c2 = (j > 0) ? nums[j] - dp[i][j - 1] : Integer.MIN_VALUE;
                    dp[i][j] = Math.max(c1, c2);
                }
            }
        }

        return dp[0][len - 1] >= 0;
    }
}
// @lc code=end

