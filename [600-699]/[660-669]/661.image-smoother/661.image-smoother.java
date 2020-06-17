/*
 * @lc app=leetcode.cn id=661 lang=java
 *
 * [661] 图片平滑器
 */

// @lc code=start
public class Solution {
    public int[][] imageSmoother(int[][] M) {
        int m = M.length;
        if(m == 0) return new int[0][0];
        int n = M[0].length;
        if(n == 0) return new int[m][0];

        int[][] sum = new int[m + 1][n + 1];
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                sum[i + 1][j + 1] = M[i][j] + sum[i][j + 1] + sum[i + 1][j] - sum[i][j];
            }
        }

        int[][] res = new int[m][n];
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                int x1 = Math.max(i - 1, 0);
                int y1 = Math.max(j - 1, 0);

                int x2 = Math.min(i + 1, m - 1);
                int y2 = Math.min(j + 1, n - 1);

                res[i][j] = (sum[x2 + 1][y2 + 1] - sum[x1][y2 + 1] - sum[x2 + 1][y1] + sum[x1][y1]) / ((y2 - y1 + 1) * (x2 - x1 + 1));
            }
        }

        return res;
    }
}
// @lc code=end

