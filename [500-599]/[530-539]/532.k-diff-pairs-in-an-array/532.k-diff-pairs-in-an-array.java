/*
 * @lc app=leetcode id=532 lang=java
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int findPairs(int[] nums, int k) {
        if(k < 0) return 0;
        Map<Integer, Integer> map = new HashMap<>();

        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int count = 0;
        for(int num : map.keySet()){
            if(k == 0){
                if(map.get(num) > 1) count++;
            } else {
                if(map.containsKey(num - k)) count++;
            }
        }

        return count;
    }
}
// @lc code=end

