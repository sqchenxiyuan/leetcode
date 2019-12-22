/*
 * @lc app=leetcode id=416 lang=java
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public boolean canPartition(int[] nums) {
        //和是偶数
        //寻找有没有和是1/2总和的子集
        Map<Integer, Map<Integer, Boolean>> cacheMap = new HashMap<>();

        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            cacheMap.put(i, new HashMap<>());
        }

        if(sum % 2 == 1) return false;

        return helper(cacheMap, nums, 0, sum / 2);
    }

    private boolean helper(Map<Integer, Map<Integer, Boolean>> cacheMap, int[] nums, int curIndex, int targetSum){
        if(curIndex >= nums.length) return false;
        Map<Integer, Boolean> map = cacheMap.get(curIndex);
        if(map.containsKey(targetSum)) return map.get(targetSum);

        if(targetSum - nums[curIndex] == 0) return true;
        if(targetSum - nums[curIndex] > 0){
            if(helper(cacheMap, nums, curIndex + 1, targetSum - nums[curIndex])) return true;
        }
        if(helper(cacheMap, nums, curIndex + 1, targetSum)) return true;
        map.put(targetSum, false);
        return false;
    }
}
// @lc code=end

