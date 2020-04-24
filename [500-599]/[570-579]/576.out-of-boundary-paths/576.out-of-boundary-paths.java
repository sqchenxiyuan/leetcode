/*
 * @lc app=leetcode.cn id=576 lang=java
 *
 * [576] 出界的路径数
 */

// @lc code=start
public class Solution {
    private static int mod = 1000000007;

    public int findPaths(int m, int n, int N, int i, int j) {
        long count = 0;
        long[][] now = new long[m][n];
        now[i][j] = 1;
        while (N > 0){
            long[][] next = new long[m][n];
            for(int x = 0; x < m; x++){
                for(int y = 0; y < n; y++){
                    long num = now[x][y];
                    if(x > 0) next[x - 1][y] = (next[x - 1][y] + num) % mod;
                    else count = (count + num) % mod;

                    if(x < m - 1) next[x + 1][y] = (next[x + 1][y] + num) % mod;
                    else count = (count + num) % mod;

                    if(y > 0) next[x][y - 1] = (next[x][y - 1] + num) % mod;
                    else count = (count + num) % mod;

                    if(y < n - 1) next[x][y + 1] = (next[x][y + 1] + num) % mod;
                    else count = (count + num) % mod;
                }
            }
            now = next;
            N--;
        };

        return (int)count;
    }

    public static void main(String[] args) {
        new Solution().findPaths(2,2,2,0,0);
    }
}
// @lc code=end

