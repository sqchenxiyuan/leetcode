/*
 * @lc app=leetcode id=456 lang=java
 *
 * [456] 132 Pattern
 */

// @lc code=start
import java.util.Stack;

public class Solution {
    public boolean find132pattern(int[] nums) {
        int s3 = Integer.MIN_VALUE;
        Stack<Integer> stack = new Stack<>();
        for(int i = nums.length - 1; i >= 0; i--){
            if(nums[i] < s3) return true;
            while (!stack.empty() && stack.peek() < nums[i]){
                s3 = stack.pop();
            }
            stack.add(nums[i]);
        }
        return false;
    }
}
// @lc code=end

