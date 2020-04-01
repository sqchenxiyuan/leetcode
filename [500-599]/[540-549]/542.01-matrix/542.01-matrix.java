/*
 * @lc app=leetcode id=542 lang=java
 *
 * [542] 01 Matrix
 */

// @lc code=start
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Queue;

public class Solution {
    private static int[][] dirctions = new int[][]{
            {-1,0},{1,0},{0,-1},{0,1}
    };

    public int[][] updateMatrix(int[][] matrix) {
        Queue<int[]> queue = new ArrayDeque<>();

        int m = matrix.length;
        int n = matrix[0].length;
        int[][] map = new int[m][n];

        for(int i = 0; i < m; i++){
            Arrays.fill(map[i], -1);
            for(int j = 0; j < n; j++){
                if(matrix[i][j] == 0){
                    map[i][j] = 0;
                    queue.add(new int[]{i,j});
                }
            }
        }

        while (queue.size() > 0){
            int[] p = queue.poll();
            for(int[] d : dirctions){
                int x = p[0] + d[0];
                int y = p[1] + d[1];
                if(x < 0 || x >= m || y < 0 || y >= n) continue;
                if(map[x][y] == -1){
                    map[x][y] = map[p[0]][p[1]] + 1;
                    queue.add(new int[]{x,y});
                }
            }
        }

        return map;
    }
}
// @lc code=end

