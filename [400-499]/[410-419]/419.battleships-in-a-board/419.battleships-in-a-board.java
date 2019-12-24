/*
 * @lc app=leetcode id=419 lang=java
 *
 * [419] Battleships in a Board
 */

// @lc code=start
public class Solution {
    public int countBattleships(char[][] board) {
        int m = board.length;
        if(m == 0) return 0;
        int n = board[0].length;
        if(n == 0) return 0;

        int count = 0;
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n;j++){
                char c = board[i][j];
                if(c == 'X'){
                    //之前会遍历过
                    if(i > 0 && board[i - 1][j] == 'X') continue;
                    if(j > 0 && board[i][j - 1] == 'X') continue;

                    int curI = i;
                    int curJ = j;
                    while (true){
                        int nextI = -1;
                        int nextJ = -1;
                        if(curI + 1 < m && board[curI + 1][curJ] == 'X'){
                            nextI = curI + 1;
                            nextJ = curJ;
                        }

                        if(curJ + 1 < n && board[curI][curJ + 1] == 'X'){
                            //有重复的
                            if(nextI != -1){
                                break;
                            }
                            nextI = curI;
                            nextJ = curJ + 1;
                        }

                        if(nextI == -1){
                            count++;
                            break;
                        }

                        curI = nextI;
                        curJ = nextJ;
                    }
                }
            }
        }

        return count;
    }
}
// @lc code=end

