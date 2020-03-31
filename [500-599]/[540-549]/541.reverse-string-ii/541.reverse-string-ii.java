/*
 * @lc app=leetcode id=541 lang=java
 *
 * [541] Reverse String II
 */

// @lc code=start
public class Solution {
    public String reverseStr(String s, int k) {
        int n = s.length();
        char[] chars = s.toCharArray();
        char[] newChars = new char[n];

        int left = 0;
        while (left < n){
            int right = Math.min(left + k - 1, n - 1);
            for(int i = 0; i < k && left < n; i++, left++){
                newChars[left] = chars[right - i];
            }
            for(int i = 0; i < k && left < n; i++, left++){
                newChars[left] = chars[left];
            }
        }

        return new String(newChars);
    }
}
// @lc code=end

