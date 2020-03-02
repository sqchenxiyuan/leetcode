/*
 * @lc app=leetcode id=503 lang=java
 *
 * [503] Next Greater Element II
 */

// @lc code=start
import java.util.Arrays;
import java.util.Stack;

public class Solution {
    public int[] nextGreaterElements(int[] nums) {
        Stack<Integer> stack = new Stack<>();
        int len = nums.length;
        int[] result = new int[len];
        Arrays.fill(result, -1);

        for(int i = 0; i < len * 2; i++){//遍历两个长度
            int num = nums[i % len];
            while (stack.size() > 0 && num > nums[stack.peek()]){
                result[stack.pop()] = num;
            }

            if(i < len) stack.add(i);
        }

        return result;
    }
}
// @lc code=end

