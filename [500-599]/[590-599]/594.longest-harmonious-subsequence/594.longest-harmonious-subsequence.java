/*
 * @lc app=leetcode.cn id=594 lang=java
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int findLHS(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int max = 0;
        for(int num : map.keySet()){
            if(map.containsKey(num - 1)){
                max = Math.max(max, map.get(num - 1) + map.get(num));
            }

            if(map.containsKey(num + 1)){
                max = Math.max(max, map.get(num + 1) + map.get(num));
            }
        }

        return max;
    }

    public static void main(String[] args) {
        new Solution().findLHS(new int[]{1,1,1,1});
    }
}
// @lc code=end

