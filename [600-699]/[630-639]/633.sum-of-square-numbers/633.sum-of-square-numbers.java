/*
 * @lc app=leetcode.cn id=633 lang=java
 *
 * [633] 平方数之和
 */

// @lc code=start
public class Solution {
    public boolean judgeSquareSum(int c) {
        int sqrtc = (int)Math.sqrt(c);
        for(int i = 0; i <= sqrtc; i++){
            int d = c - i * i;
            if(Math.sqrt(d) == (int)Math.sqrt(d)){
                return true;
            }
        }
        return false;
    }
}
// @lc code=end

