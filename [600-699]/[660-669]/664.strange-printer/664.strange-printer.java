/*
 * @lc app=leetcode.cn id=664 lang=java
 *
 * [664] 奇怪的打印机
 */

// @lc code=start
public class Solution {
    public int strangePrinter(String s) {
        //dp[i][j] = dp[]
        int l = s.length();
        if(l == 0) return 0;
        char[] chars = s.toCharArray();
        int[][] dp = new int[l][l];
        return help(dp, chars, 0, l - 1);
    }

    public int help(int[][] dp, char[] chars, int i, int j){
        if(j < i) return 0;
        if(j == i) return 1;
        if(dp[i][j] == 0){
            int res = help(dp, chars, i + 1, j) + 1;
            for(int x = i + 1; x <= j; x++){
                if(chars[i] == chars[x]){
                    res = Math.min(res, help(dp, chars, i, x - 1) + help(dp, chars, x + 1, j));
                }
            }
            dp[i][j] = res;
        }
        return dp[i][j];
    }
}
// @lc code=end

