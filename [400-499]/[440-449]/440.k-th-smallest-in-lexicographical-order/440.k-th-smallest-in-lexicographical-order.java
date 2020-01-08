/*
 * @lc app=leetcode id=440 lang=java
 *
 * [440] K-th Smallest in Lexicographical Order
 */

// @lc code=start
package fun.chenxiyuan.demo.leetcode_440;

public class Solution {
    public int findKthNumber(int n, int k) {
        int cur = 1;
        k--;
        while (k > 0){
            long step = steps(n, cur, cur + 1);
            if(step <= k){
                cur++;
                k -= step;
            } else {
                cur *= 10;
                k--;
            }
        }
        return cur;
    }

    //计算从from到to需要的步数
    private long steps(long n, long from, long to){
        long step = 0;
        while (from <= n){
            step += Math.min(to, n + 1) - from;
            from *= 10;
            to *= 10;
        }
        return step;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().findKthNumber(681692778,351251360));
    }
}
// @lc code=end

