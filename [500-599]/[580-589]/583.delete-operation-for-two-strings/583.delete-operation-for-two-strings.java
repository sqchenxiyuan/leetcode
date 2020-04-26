/*
 * @lc app=leetcode.cn id=583 lang=java
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
public class Solution {
    public int minDistance(String word1, String word2) {
        //dp[i][j] = dp[i - 1][j - 1]   if w1[i] == w1[j]
        //         = min(dp[i - 1][j], dp[i][j - 1]) + 1 if(if w1[i] != w1[j])
        char[] chars1 = word1.toCharArray();
        char[] chars2 = word2.toCharArray();
        int[][] dp = new int[chars1.length + 1][chars2.length + 1];
        dp[0][0] = 0;
        for(int i = 1; i < chars1.length + 1; i++){
            dp[i][0] = i;
        }
        for(int i = 1; i < chars2.length + 1; i++){
            dp[0][i] = i;
        }

        for(int i = 1; i < chars1.length + 1; i++){
            for(int j = 1; j < chars2.length + 1; j++){
                if(chars1[i] == chars2[j]){
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
                }
            }
        }

        return dp[chars1.length][chars2.length];
    }
}
// @lc code=end

