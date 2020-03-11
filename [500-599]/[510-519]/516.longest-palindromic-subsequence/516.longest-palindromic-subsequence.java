/*
 * @lc app=leetcode id=516 lang=java
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
public class Solution {
    public int longestPalindromeSubseq(String s) {
        int len = s.length();
        int[][] dp = new int[len][len];//dp[i][j]表示从[i,j]的字符串长度
        //dp[i][j] = (s[i]==s[j])dp[i+1][j-1] + 2;(s[i]!=s[j])max(dp[i+1][j],dp[i][j-1])
        for(int i = 0; i < len; i++){
            dp[i][i] = 1;
        }

        char[] chars = s.toCharArray();
        for(int i = len - 1; i >= 0; i--){
            for(int j = i; j < len; j++){
                if(i == j){
                    dp[i][j] = 1;
                } else {
                    if(chars[i] == chars[j]){
                        dp[i][j] = dp[i+1][j-1] + 2;
                    } else {
                        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                    }
                }
            }
        }
        return dp[0][len - 1];
    }

    public static void main(String[] args) {
        new Solution().longestPalindromeSubseq("bbbab");
    }
}
// @lc code=end

