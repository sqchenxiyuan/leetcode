/*
 * @lc app=leetcode id=554 lang=java
 *
 * [554] Brick Wall
 */

// @lc code=start
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public int leastBricks(List<List<Integer>> wall) {
        Map<Integer, Integer> map = new HashMap<>();

        for(List<Integer> line : wall){
            int sum = 0;
            for(int num : line){
                if(sum > 0){
                    map.put(sum, map.getOrDefault(sum, 0) + 1);
                }
                sum += num;
            }
        }
        int max = 0;
        for(int v : map.values()){
            max = Math.max(max, v);
        }
        return wall.size() - max;
    }
}
// @lc code=end

