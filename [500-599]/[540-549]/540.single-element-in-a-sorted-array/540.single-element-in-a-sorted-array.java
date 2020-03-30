/*
 * @lc app=leetcode id=540 lang=java
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
public class Solution {
    public int singleNonDuplicate(int[] nums) {
        int n = nums.length; //必定是奇数
        if(n == 1) return 1;

        if(nums[0] != nums[1]) return nums[0];
        if(nums[n - 2] != nums[n - 1]) return nums[n - 1];

        int left = 0;
        int right = n - 1;
        while (left < right) {
            int mid = (left + right) / 2;
            if (mid > 0 && nums[mid - 1] == nums[mid] ||
                    mid < n - 1 && nums[mid + 1] == nums[mid]) { //附近有相同的
                if(mid > 0 && nums[mid - 1] == nums[mid]){
                    mid--;
                }
                if(mid % 2 == 0){ //没有变化在右边
                    left = mid + 2;
                } else {
                    right = mid - 1;
                }
            } else {
                return nums[mid];
            }
        }
        return nums[left];
    }
}
// @lc code=end

