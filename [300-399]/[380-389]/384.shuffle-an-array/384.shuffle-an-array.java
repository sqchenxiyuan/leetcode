/*
 * @lc app=leetcode id=384 lang=java
 *
 * [384] Shuffle an Array
 */

// @lc code=start
class Solution {

    private int[] originNums;

    public Solution(int[] nums) {
        originNums = nums;
    }

    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return originNums;
    }

    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        int len = originNums.length;
        int[] nums = new int[len];
        System.arraycopy(originNums, 0, nums, 0, len);

        for(int i = 0; i < len; i++){
            int r = new Double(Math.floor(Math.random() * len)).intValue() % len;
            int x = nums[i];
            nums[i] = nums[r];
            nums[r] = x;
        }

        return nums;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */
// @lc code=end

