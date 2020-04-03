/*
 * @lc app=leetcode id=546 lang=java
 *
 * [546] Remove Boxes
 */

// @lc code=start
public class Solution {
    public int removeBoxes(int[] boxes) {
        int n = boxes.length;
        int[][][] dp = new int[n][n][n];

        return help(0, n - 1, 0, boxes, dp);
    }

    private int help(int i, int j, int k, int[] boxes, int[][][] dp){ //k表示前面和boxs[i]相同的
        if(i > j) return 0;
        if(dp[i][j][k] > 0) return dp[i][j][k];

        int res = 0;

        if(i < j && boxes[i] == boxes[i + 1]){
            res = help(i + 1, j , k + 1, boxes, dp);
        } else {
            res = (k + 1) * (k + 1) + help(i + 1, j , 0, boxes, dp);

            for(int x = i + 2; x <= j; x++){
                if(boxes[i] == boxes[x]){
                    res = Math.max(res, help(i + 1, x - 1, 0, boxes, dp) + help(x, j , k + 1, boxes, dp));
                }
            }
        }

        dp[i][j][k] = res;
        return res;
    }
}
// @lc code=end

