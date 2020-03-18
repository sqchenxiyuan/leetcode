/*
 * @lc app=leetcode id=523 lang=java
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {//连续数组
        if(k < 0) k = -k;
        int sum = 0;
        Map<Integer, Integer> map = new HashMap<>(); //数值0-i的和
        map.put(0, -1);
        for(int i = 0; i < nums.length; i++){
            sum = nums[i] + sum;
            if(k != 0){
                sum = sum % k;
            }

            if(map.containsKey(sum)){
                if(i - map.get(sum) > 1){
                    return true;
                }
            } else {
                map.put(sum, i);
            }
        }
        return false;
    }
}
// @lc code=end

