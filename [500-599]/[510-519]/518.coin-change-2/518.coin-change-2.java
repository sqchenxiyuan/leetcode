/*
 * @lc app=leetcode id=518 lang=java
 *
 * [518] Coin Change 2
 */

// @lc code=start
public class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1]; //dp[i] 表示到达数目i的方法数
        dp[0] = 1;
        for(int coin : coins){
            for(int i = coin; i <= amount; i++){
                dp[i] += dp[i - coin];
            }
        }

        return dp[amount];
    }
}
// @lc code=end

