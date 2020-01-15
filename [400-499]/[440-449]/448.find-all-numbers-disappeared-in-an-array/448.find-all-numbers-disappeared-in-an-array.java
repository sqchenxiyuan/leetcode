/*
 * @lc app=leetcode id=448 lang=java
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        int n = nums.length;
        for(int i = 0; i < n; i++){
            while (true){
                int x = nums[i];
                if(nums[x - 1] == x) break;
                nums[i] = nums[x - 1];
                nums[x - 1] = x;
            }
        }

        List<Integer> res = new ArrayList<>();
        for(int i = 0; i < n; i++){
            if(nums[i] != i +1){
                res.add(i + 1);
            }
        }
        return res;
    }
}
// @lc code=end

