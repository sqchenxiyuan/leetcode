/*
 * @lc app=leetcode.cn id=566 lang=java
 *
 * [566] 重塑矩阵
 */

// @lc code=start
public class Solution {
    public int[][] matrixReshape(int[][] nums, int r, int c) {
        int m = nums.length;
        if(m == 0) return nums;
        int n = nums[0].length;
        if(n == 0) return nums;

        if(m * n != r * c) return nums;

        int[][] res = new int[r][c];
        for(int i = 0; i < r ; i++){
            for(int j = 0; j < c; j++){
                int idx = i * c + j;
                res[i][j] = nums[idx / n][idx % n];
            }
        }

        return res;
    }
}
// @lc code=end

