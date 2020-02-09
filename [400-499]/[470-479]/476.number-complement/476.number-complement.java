/*
 * @lc app=leetcode id=476 lang=java
 *
 * [476] Number Complement
 */

// @lc code=start
public class Solution {
    public int findComplement(int num) {
        int x = 0;
        int base = 1;
        while (num > 0){
            if((num & 1) == 0){
                x += base;
            }
            num = num >> 1;
            base = base << 1;
        }
        return x;
    }
}
// @lc code=end

