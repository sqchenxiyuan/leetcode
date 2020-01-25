/*
 * @lc app=leetcode id=458 lang=java
 *
 * [458] Poor Pigs
 */

// @lc code=start
public class Solution {
    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        //m^(count + 1) >= buckets
        //m^(count + 1) >= buckets
        //m >= log(buckets) / log(count + 1)
        return Double.valueOf(Math.ceil(Math.log(buckets) / Math.log(minutesToTest / minutesToDie + 1))).intValue();
    }

    public static void main(String[] args) {
        new Solution().poorPigs(1000,15,60);
    }
}
// @lc code=end

