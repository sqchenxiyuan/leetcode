/*
 * @lc app=leetcode.cn id=650 lang=java
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
public class Solution {
    public int minSteps(int n) {
        //素数分解
        int count = 0;
        int x = 2;
        while (n > 1){
            while (n % x == 0){
                count += x;
                n /= x;
            }
            x++;
        }
        return count;
    }
}
// @lc code=end

