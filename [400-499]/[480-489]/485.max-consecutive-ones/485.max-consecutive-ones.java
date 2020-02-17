/*
 * @lc app=leetcode id=485 lang=java
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
public class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int count = 0;
        for(int num : nums){
            if(num == 1){
                count++;
                if(count > max){
                    max = count;
                }
            } else {
                count = 0;
            }
        }
        return max;
    }
}
// @lc code=end

