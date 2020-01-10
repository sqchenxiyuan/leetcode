/*
 * @lc app=leetcode id=441 lang=java
 *
 * [441] Arranging Coins
 */

// @lc code=start
public class Solution {
    public int arrangeCoins(int n) {
        return new Double(Math.floor((-1 + Math.sqrt(1 + 8.0 * n)) / 2)).intValue();
    }

    public static void main(String[] args) {
        System.out.println(new Solution().arrangeCoins(1));
        System.out.println(new Solution().arrangeCoins(1804289383));
    }
}
// @lc code=end

