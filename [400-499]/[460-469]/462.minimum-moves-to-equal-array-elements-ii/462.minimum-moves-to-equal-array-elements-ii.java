/*
 * @lc app=leetcode id=462 lang=java
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    public int minMoves2(int[] nums) {
        Arrays.sort(nums);
        int mid = nums[nums.length / 2];
        int min = 0;
        for(int num : nums){
            min += Math.abs(num - mid);
        }
        return min;
    }

    public static void main(String[] args) {
        new Solution().minMoves2(new int[]{1,2,3});
    }
}
// @lc code=end

