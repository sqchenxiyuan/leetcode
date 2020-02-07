/*
 * @lc app=leetcode id=474 lang=java
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
public class Solution {
    public int findMaxForm(String[] strs, int m, int n) {
        int[][] dp = new int[m + 1][n + 1];//dp[i][j]表示m=i,n=j的最大值
        for(String str : strs){
            int[] needs = getString01Counts(str);
            //避免被重复算入
            for(int i = m; i >= needs[0]; i--){
                for(int j = n; j >= needs[1]; j--){
                    dp[i][j] = Math.max(dp[i][j], dp[i - needs[0]][j - needs[1]] + 1);
                }
            }
        }
        return dp[m][n];
    }

    private int[] getString01Counts(String str){
        int[] result = new int[2];
        for(char c : str.toCharArray()){
            result[c - '0']++;
        }
        return result;
    }
}
// @lc code=end

