/*
 * @lc app=leetcode id=494 lang=java
 *
 * [494] Target Sum
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int findTargetSumWays(int[] nums, int S) {
        int len = nums.length;
        Map<Integer, Integer>[] cache = new Map[len];
        cache[0] = new HashMap<>();
        cache[0].put(nums[0], cache[0].getOrDefault(nums[0], 0) + 1);
        cache[0].put(-nums[0], cache[0].getOrDefault(-nums[0], 0) + 1);

        for(int i = 1; i < len; i++){
            Map<Integer, Integer> preMap = cache[i - 1];
            Map<Integer, Integer> map = new HashMap<>();
            cache[i] = map;
            int num = nums[i];
            for(int k : preMap.keySet()){
                int sum = k + num;
                int sub = k - num;
                int count = preMap.get(k);
                map.put(sum, count + map.getOrDefault(sum, 0));
                map.put(sub, count + map.getOrDefault(sub, 0));
            }
        }

        return cache[len - 1].getOrDefault(S, 0);
    }
}
// @lc code=end

