/*
 * @lc app=leetcode id=442 lang=java
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> res = new ArrayList<>();

        for(int i = 0; i < nums.length; i++){
            int n = Math.abs(nums[i]) - 1;
            if(nums[n] < 0) res.add(n + 1);
            nums[n] = -nums[n];
        }

        return  res;
    }

    public static void main(String[] args) {
        new Solution().findDuplicates(new int[]{4,3,2,7,8,2,3,1});
    }
}
// @lc code=end

