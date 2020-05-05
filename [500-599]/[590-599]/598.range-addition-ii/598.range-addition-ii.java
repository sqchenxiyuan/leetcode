/*
 * @lc app=leetcode.cn id=598 lang=java
 *
 * [598] 范围求和 II
 */

// @lc code=start
public class Solution {
    public int maxCount(int m, int n, int[][] ops) {
        for(int[] op : ops){
            m = op[0] < m ? op[0] : m;
            n = op[1] < n ? op[1] : n;
        }

        return m * n;
    }
}
// @lc code=end

