/*
 * @lc app=leetcode id=561 lang=java
 *
 * [561] Array Partition I
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    public int arrayPairSum(int[] nums) {
        Arrays.sort(nums);
        int sum = 0;
        for(int i = 0; i < nums.length; i = i + 2){
            sum += nums[i];
        }
        return sum;
    }
}
// @lc code=end

