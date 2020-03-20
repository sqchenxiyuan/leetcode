/*
 * @lc app=leetcode id=525 lang=java
 *
 * [525] Contiguous Array
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int findMaxLength(int[] nums) {
        int n = nums.length;

        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);

        int sum = 0;
        int max = 0;
        for(int i = 0; i < n; i++){
            sum = sum + (-1 + nums[i] * 2);
            if(map.containsKey(sum)){
                max = Math.max(max, i - map.get(sum));
            } else {
                map.put(sum, i);
            }
        }

        return max;
    }
}
// @lc code=end

