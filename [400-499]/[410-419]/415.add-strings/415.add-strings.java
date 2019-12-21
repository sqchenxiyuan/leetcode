/*
 * @lc app=leetcode id=415 lang=java
 *
 * [415] Add Strings
 */

// @lc code=start
public class Solution {
    public String addStrings(String num1, String num2) {
        int l1 = num1.length();
        int l2 = num2.length();
        int l = Math.max(l1, l2);
        int x = 0;
        String result = "";
        int preadd = 0;
        while (x < l){
            int a = x < l1 ? num1.charAt(l1 - 1 - x) - '0' : 0;
            int b = x < l2 ? num2.charAt(l2 - 1 - x) - '0' : 0;
            int num = a + b + preadd;
            preadd = num / 10;
            result = String.valueOf(num % 10) + result;
            x++;
        }
        if(preadd > 0) result = String.valueOf(preadd % 10) + result;

        return result;
    }
}
// @lc code=end

