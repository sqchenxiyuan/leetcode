/*
 * @lc app=leetcode id=557 lang=java
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
public class Solution {
    public String reverseWords(String s) {
        String[] arr = s.trim().split(" +");
        StringBuilder sb = new StringBuilder();

        boolean x = false;
        for(String str : arr){
            if(x){
                sb.append(' ');
            } else {
                x = true;
            }
            sb.append(reverse(str));
        }
        return sb.toString();
    }

    String reverse(String str){
        char[] chars = str.toCharArray();
        reverse(chars);
        return new String(chars);
    }

    void reverse(char[] chars){
        int n = chars.length;
        int l = 0;
        int r = n - 1;
        while (l < r){
            char x = chars[l];
            chars[l] = chars[r];
            chars[r] = x;
            l++;
            r--;
        }
        return;
    }
}
// @lc code=end

