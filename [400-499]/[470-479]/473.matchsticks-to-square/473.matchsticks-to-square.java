/*
 * @lc app=leetcode id=473 lang=java
 *
 * [473] Matchsticks to Square
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    public boolean makesquare(int[] nums) {
        int sum = 0;
        for(int num : nums){
            sum += num;
        }
        if(sum == 0 || sum % 4 != 0) return false;

        int target = sum / 4;
        Arrays.sort(nums);
        boolean[] viewed = new boolean[nums.length];
        if(nums[nums.length - 1] > target) return false;

        for(int i = 0; i < 4; i++){
            if(!findWay(target, nums.length - 1, nums, viewed)) return false;
        }

        return true;
    }

    private boolean findWay(int target, int startIndex, int[] nums, boolean[] viewed){
        for(int i = startIndex; i>=0; i--){
            if(viewed[i]) continue;
            int num = nums[i];
            if(target - num < 0) continue;
            else if(target - num == 0){
                viewed[i] = true;
                return true;
            } else {
                viewed[i] = true;
                if(findWay(target - num, i - 1, nums, viewed)){
                    return true;
                }
                viewed[i] = false;
            }
        }
        return false;
    }
}
// @lc code=end

