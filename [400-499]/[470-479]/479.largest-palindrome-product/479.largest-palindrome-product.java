/*
 * @lc app=leetcode id=479 lang=java
 *
 * [479] Largest Palindrome Product
 */

// @lc code=start
public class Solution {
    public int largestPalindrome(int n) {
        if(n == 1) return 9;
        long up = Double.valueOf(Math.pow(10, n) - 1).longValue();
        long down = Double.valueOf(Math.pow(10, n - 1)).longValue();
        for(long i = up; i >= down; i--){
            long p = buildPalindrome(i);
            double d = Math.sqrt(p);
            for(long j = up; j >= d; j--){
                if(p % j == 0) return Long.valueOf(p % 1337).intValue();
            }
        }
        return 0;
    }

    private long buildPalindrome(long num){
        long result = num;
        while (num > 0){
            result = result * 10 + num % 10;
            num = num / 10;
        }
        return result;
    }
}
// @lc code=end

