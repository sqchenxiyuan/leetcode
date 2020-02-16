/*
 * @lc app=leetcode id=483 lang=java
 *
 * [483] Smallest Good Base
 */

// @lc code=start
public class Solution {
    public String smallestGoodBase(String n) {
        // n = 1 + base + base ^ 2 + ... + base ^ (m - 1) //m表示次方数目
        // n = (base ^ m - 1) / (base - 1)
        // base ^ (m - 1) < n < base ^ m
        // n ^ (1 / m) < base < n ^ (1 / (m - 1))
        long num = Long.valueOf(n);

        for(long m = (long)(Math.log(num) / Math.log(2)) + 1; m >= 2; m--){//m最多的情况是用2进行表示的时候
            long small = (long)Math.pow(num, 1.0 / m);//最小的base值
            long big = (long)Math.pow(num, 1.0 / (m - 1)) + 1;//最大的base值
            while (small <= big){
                long mid = small + (big - small) / 2;
                long sum = 0;
                long base = 1;
                long x = m;
                while (x > 0){
                    sum += base;
                    base *= mid;
                    x--;
                }
                if(sum == num) {
                    return Long.valueOf(mid).toString();
                }
                else if(sum > num){
                    big = mid - 1;
                } else {
                    small = mid + 1;
                }
            }
        }

        return Long.valueOf(num - 1).toString();
    }
}
// @lc code=end

