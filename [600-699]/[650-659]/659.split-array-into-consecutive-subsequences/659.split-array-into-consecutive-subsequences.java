/*
 * @lc app=leetcode.cn id=659 lang=java
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public boolean isPossible(int[] nums) {
        Map<Integer, Integer> count = new HashMap<>();
        Map<Integer, Integer> chains = new HashMap<>(); //以i为结尾的链条

        for(int num : nums){
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        for(int num : nums){
            if(count.get(num) == 0) continue;
            if(chains.getOrDefault(num - 1, 0) > 0){ //有现成链条
                chains.put(num, chains.getOrDefault(num, 0) + 1);
                chains.put(num - 1, chains.getOrDefault(num - 1, 0) - 1);
            } else if(count.getOrDefault(num + 1, 0) > 0 && count.getOrDefault(num + 2, 0) > 0){
                count.put(num + 1, count.get(num + 1) - 1);
                count.put(num + 2, count.get(num + 2) - 1);
                chains.put(num + 2, chains.getOrDefault(num + 2, 0) + 1);
            } else {
                return false;
            }
            count.put(num, count.get(num) - 1);
        }
        return true;
    }
}
// @lc code=end

