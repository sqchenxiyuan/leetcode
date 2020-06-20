/*
 * @lc app=leetcode.cn id=665 lang=java
 *
 * [665] 非递减数列
 */

// @lc code=start
public class Solution {
    public boolean checkPossibility(int[] nums) {
        int count = 0;
        for(int i = 0; i < nums.length - 1; i++){
            if(nums[i] > nums[i + 1]){
                if(i == 0){
                    count++;
                    nums[i] = nums[i + 1];
                } else if(i == nums.length - 2){
                    count++;
                    nums[i + 1] = nums[i];
                } else {
                    if(nums[i - 1] <= nums[i + 1]){
                        nums[i] = nums[i + 1];
                        count++;
                    } else if(nums[i] <= nums[i + 2]) {
                        nums[i + 1] = nums[i + 2];
                        count++;
                    } else {
                        return false;
                    }
                }
            }
            if(count > 1) return false;
        }
        return true;
    }
}
// @lc code=end

