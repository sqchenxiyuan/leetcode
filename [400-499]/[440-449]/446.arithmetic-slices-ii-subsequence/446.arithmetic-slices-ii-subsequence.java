/*
 * @lc app=leetcode id=446 lang=java
 *
 * [446] Arithmetic Slices II - Subsequence
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    //至少三个元素，间隔相同的子序列
    public int numberOfArithmeticSlices(int[] A) {
        int n = A.length;
        Map<Integer, Integer>[] map = new Map[n];
        int res = 0;

        for(int i = 0; i < n; i++){
            map[i] = new HashMap<>();
            for(int j = 0; j < i; j++){
                long diff = (long)A[i] - A[j];
                if (diff <= Integer.MIN_VALUE || diff > Integer.MAX_VALUE) continue;

                int d = (int)diff;
                int preCount = map[j].getOrDefault(d, 0);
                res += preCount;

                map[i].put(d, map[i].getOrDefault(d, 0) + preCount + 1);
            }
        }

        return res;
    }
}
// @lc code=end

