/*
 * @lc app=leetcode.cn id=581 lang=java
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int[] x = Arrays.copyOf(nums, nums.length);
        Arrays.sort(x);

        int left = 0;
        int right = x.length - 1;
        while (left <= right && nums[left] == x[left]) left++;
        while (left <= right && nums[right] == x[right]) right--;

        return right - left + 1;
    }
}
// @lc code=end

