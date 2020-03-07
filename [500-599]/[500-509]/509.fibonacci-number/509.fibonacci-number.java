/*
 * @lc app=leetcode id=509 lang=java
 *
 * [509] Fibonacci Number
 */

// @lc code=start
public class Solution {
    public int fib(int N) {
        int[] nums = new int[Math.max(2, N + 1)];
        nums[0] = 0;
        nums[1] = 1;
        for(int i = 2; i <= N; i++){
            nums[i] = nums[i - 1] + nums[i - 2];
        }
        return nums[N];
    }
}
// @lc code=end

