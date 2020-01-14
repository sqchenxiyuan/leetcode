/*
 * @lc app=leetcode id=447 lang=java
 *
 * [447] Number of Boomerangs
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int numberOfBoomerangs(int[][] points) {
        int n = points.length;
        Map<Long, Integer>[] maps = new Map[n];
        for(int i = 0; i < n; i++){
            maps[i] = new HashMap<>();
            for(int j = 0; j < i; j++){
                int[] pi = points[i];
                int[] pj = points[j];
                long d = new Double(Math.pow(pi[0] - pj[0], 2) + Math.pow(pi[1] - pj[1], 2)).longValue();

                maps[i].put(d, maps[i].getOrDefault(d, 0) + 1);
                maps[j].put(d, maps[j].getOrDefault(d, 0) + 1);
            }
        }

        int res = 0;
        for(int i = 0; i < n; i++){
            Map<Long, Integer> map = maps[i];
            for(long key : map.keySet()){
                int count = map.get(key);
                if(count >= 2){
                    res = res + count * (count - 1);
                }
            }
        }

        return res;
    }
}
// @lc code=end

