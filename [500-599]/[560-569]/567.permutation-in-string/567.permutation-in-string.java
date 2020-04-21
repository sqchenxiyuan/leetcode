/*
 * @lc app=leetcode.cn id=567 lang=java
 *
 * [567] 字符串的排列
 */

// @lc code=start
public class Solution {
    public boolean checkInclusion(String s1, String s2) {
        char[] s1Chars = s1.toCharArray();
        int s1l = s1Chars.length;

        char[] s2Chars = s2.toCharArray();
        int s2l = s2Chars.length;
        if(s2l < s1l) return false;

        int[] s1Sum = new int[26];
        for(char c : s1Chars){
            s1Sum[c - 'a']++;
        }


        int[] s2Sum = new int[26];
        for(int i = 0; i < s1l - 1; i++){
            s2Sum[s2Chars[i] - 'a']++;
        }

        for(int i = s1l - 1; i < s2l; i++){
            s2Sum[s2Chars[i] - 'a']++;
            boolean ok = true;
            for(int j = 0;j < 26;j++){
                if(s1Sum[j] != s2Sum[j]){
                    ok = false;
                    break;
                }
            }
            if(ok) return true;

            s2Sum[s2Chars[i - s1l + 1] - 'a']--;
        }
        return false;
    }
}
// @lc code=end

