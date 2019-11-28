/*
 * @lc app=leetcode id=390 lang=java
 *
 * [390] Elimination Game
 */

// @lc code=start
public class Solution {
    public int lastRemaining(int n) {
        if(n == 1) return 1;
        if(n == 2 || n == 3) return 2;
        return (n / 2 - lastRemaining(n / 2) + 1) * 2;
    }
}

class Main{
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.lastRemaining(9));
        System.out.println(solution.lastRemaining(4512));
    }
}
// @lc code=end

