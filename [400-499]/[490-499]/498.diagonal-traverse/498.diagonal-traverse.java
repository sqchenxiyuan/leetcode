/*
 * @lc app=leetcode id=498 lang=java
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
public class Solution {
    public int[] findDiagonalOrder(int[][] matrix) {
        int m = matrix.length;
        if(m == 0) return new int[0];
        int n = matrix[0].length;
        if(n == 0) return new int[0];

        int[] result = new int[m * n];
        int count = 0;
        int i = 0;
        int j = 0;
        int dirction = 1; //1向上 -1向下
        while (count < m * n){
            result[count++] = matrix[i][j];

            if(dirction == 1){
                i -= 1;
                j += 1;
                if(i < 0 || j >= n) { //超出范围
                    dirction = -1;
                    int sum = i + j + 1;
                    i = sum >= n ? sum - (n - 1) : 0;
                    j = sum - i;
                }
            } else {
                i += 1;
                j -= 1;
                if(i >=m || j < 0) { //超出范围
                    dirction = 1;
                    int sum = i + j + 1;
                    j = sum >= m ? sum - (m - 1) : 0;
                    i = sum - j;
                }
            }
        }

        return result;
    }
}
// @lc code=end

