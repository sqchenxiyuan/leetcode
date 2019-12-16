/*
 * @lc app=leetcode id=409 lang=java
 *
 * [409] Longest Palindrome
 */

// @lc code=start
import java.util.Arrays;

public class Solution {

    public int longestPalindrome(String s) {
        boolean[] arr = new boolean['z' - 'A' + 1];
        Arrays.fill(arr, true);

        int len = 0;
        int one = 0; //基数个元素的个数
        for(char c : s.toCharArray()){
            int p = c - 'A';
            arr[p] = !arr[p];
            if(arr[p]){
                len += 2;
                one--;
            } else {
                one++;
            }
        }

        return len + (one > 0 ? 1 : 0);
    }
}
// @lc code=end

