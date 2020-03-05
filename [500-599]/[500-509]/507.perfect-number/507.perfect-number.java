/*
 * @lc app=leetcode id=507 lang=java
 *
 * [507] Perfect Number
 */

// @lc code=start
public class Solution {
    public boolean checkPerfectNumber(int num) {
        if(num == 1) return false;
        int start = (int)Math.sqrt(num);
        int sum = 1;
        for(int i = start; i >= 2; i--){
            if(num % i == 0){
                sum = sum + i + num / i;
            }
        }
        return sum == num;
    }
}
// @lc code=end

