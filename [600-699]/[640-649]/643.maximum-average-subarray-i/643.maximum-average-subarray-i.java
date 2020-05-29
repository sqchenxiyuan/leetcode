/*
 * @lc app=leetcode.cn id=643 lang=java
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
public class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int count = 0;
        int max = Integer.MIN_VALUE;
        for(int i = 0; i < k - 1; i++){
            count += nums[i];
        }

        for(int i = k - 1; i < nums.length; i++){
            count += nums[i];
            max = Math.max(max, count);
            count -= nums[i - k + 1];
        }


        return max * 1.0 / k;
    }
}
// @lc code=end

