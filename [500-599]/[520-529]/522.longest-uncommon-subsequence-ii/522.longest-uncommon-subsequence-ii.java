/*
 * @lc app=leetcode id=522 lang=java
 *
 * [522] Longest Uncommon Subsequence II
 */

// @lc code=start
import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    public int findLUSlength(String[] strs) {
        Arrays.sort(strs, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                if(s2.length() == s1.length()) return s1.compareTo(s2);
                return s2.length() - s1.length();
            }
        });

        int len = strs.length;
        loop1: for(int i = 0; i < len; i++){
            if(i == len - 1 || !strs[i].equals(strs[i + 1])){
                for(int j = 0; j < i; j++){
                    if(checkIfSubsequence(strs[j], strs[i])){
                        continue loop1;
                    }
                }
                return strs[i].length();
            }
        }
        return -1;
    }

    public boolean checkIfSubsequence(String s1, String s2){
        char[] s1Chars = s1.toCharArray();
        char[] s2Chars = s2.toCharArray();
        if(s1Chars.length < s2Chars.length) return false;

        int i = 0;
        for(char c : s2Chars){
            while (i < s1Chars.length){
                if(s1Chars[i] == c){
                    break;
                }
                i++;
            }
            if(i == s1Chars.length){
                return false;
            }
            i++;
        }
        return true;
    }
}
// @lc code=end

