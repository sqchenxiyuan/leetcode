/*
 * @lc app=leetcode id=454 lang=java
 *
 * [454] 4Sum II
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
        Map<Integer, Integer> map1 = new HashMap<>();
        Map<Integer, Integer> map2 = new HashMap<>();

        for(int i = 0; i < A.length; i++){
            for(int j = 0; j < B.length; j++){
                int sum = A[i] + B[j];
                map1.put(sum, map1.getOrDefault(sum, 0) + 1);
            }
        }

        for(int i = 0; i < C.length; i++){
            for(int j = 0; j < D.length; j++){
                int sum = C[i] + D[j];
                map2.put(sum, map2.getOrDefault(sum, 0) + 1);
            }
        }

        int res = 0;
        for(int num : map1.keySet()){
            if(map2.containsKey(-num)){
                res = res + map1.get(num) * map2.get(-num);
            }
        }
        return res;
    }
}
// @lc code=end

