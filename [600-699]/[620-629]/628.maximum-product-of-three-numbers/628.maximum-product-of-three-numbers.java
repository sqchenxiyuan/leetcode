/*
 * @lc app=leetcode.cn id=628 lang=java
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
//    public int maximumProduct(int[] nums) {
//        Arrays.sort(nums);
//        int l = nums.length;
//
//        return Math.max(nums[l - 1] * nums[l - 2] * nums[l - 3], nums[l - 1] * nums[0] * nums[1]);
//    }

    public int maximumProduct(int[] nums) {
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;
        int max3 = Integer.MIN_VALUE;
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;

        for(int num : nums){
            if(num < min1){
                min2 = min1;
                min1 = num;
            } else if(num < min2){
                min2 = num;
            }

            if(num > max1){
                max3 = max2;
                max2 = max1;
                max1 = num;
            } else if(num > max2){
                max3 = max2;
                max2 = num;
            } else if(num > max3){
                max3 = num;
            }
        }

        return Math.max(max1 * min1 * min2, max1 * max2 * max3);
    }
}
// @lc code=end

