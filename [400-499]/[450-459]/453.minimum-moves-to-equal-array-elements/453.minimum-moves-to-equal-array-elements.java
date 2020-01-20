/*
 * @lc app=leetcode id=453 lang=java
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
public class Solution {
    public int minMoves(int[] nums) {
        int min = Integer.MAX_VALUE;
        int sum = 0;
        for(int n : nums){
            sum += n;
            min = Math.min(min, n);
        }

        return sum - nums.length * min;
    }
}
// @lc code=end

