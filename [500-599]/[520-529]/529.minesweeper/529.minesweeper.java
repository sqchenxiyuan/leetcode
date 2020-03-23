/*
 * @lc app=leetcode id=529 lang=java
 *
 * [529] Minesweeper
 */

// @lc code=start
import java.util.ArrayDeque;
import java.util.Queue;

public class Solution {
    private static int[][] direction = new int[][]{
            {-1,-1},{-1,0},{-1,1},
            {0,-1},        {0,1},
            {1,-1},{1,0},{1,1},
    };

    public char[][] updateBoard(char[][] board, int[] click) {
        int m = board.length;
        int n = board[0].length;

        int x = click[0];
        int y = click[1];

        if(board[x][y] == 'M'){
            board[x][y] = 'X';


        } else if(board[x][y] == 'E') {
            Queue<int[]> queue = new ArrayDeque<>();
            queue.add(new int[]{x, y});

            while (queue.size() > 0){
                int[] p = queue.poll();
                int i = p[0];
                int j = p[1];

                if(board[i][j] != 'E') continue;

                int count = 0;
                for(int[] dir : direction){
                    int x1 = i + dir[0];
                    int y1 = j + dir[1];
                    if(x1 < 0 || x1 >= m || y1 < 0 || y1 >= n) continue;
                    if(board[x1][y1] == 'M' ||board[x1][y1] == 'X'){
                        count++;
                    }
                }

                if(count > 0){
                    board[i][j] = (char)(count + '0');
                } else {
                    board[i][j] = 'B';
                    for(int[] dir : direction){
                        int x1 = i + dir[0];
                        int y1 = j + dir[1];
                        if(x1 < 0 || x1 >= m || y1 < 0 || y1 >= n) continue;
                        queue.offer(new int[]{x1, y1});
                    }
                }
            }
        }
        return board;
    }
}
// @lc code=end

