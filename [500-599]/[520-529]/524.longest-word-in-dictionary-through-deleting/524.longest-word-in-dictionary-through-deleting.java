/*
 * @lc app=leetcode id=524 lang=java
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
import java.util.Comparator;
import java.util.List;

public class Solution {
    public String findLongestWord(String s, List<String> d) {
        d.sort(new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                if(s1.length() == s2.length()) return s1.compareTo(s2);
                return s2.length() - s1.length();
            }
        });
        char[] sChars = s.toCharArray();
        for(String str : d){
            char[] chars = str.toCharArray();
            if(chars.length > sChars.length) continue;
            int i = 0;
            for(char c : sChars){
                if(c == chars[i]) i++;
                if(i == chars.length) break;
            }
            if(i == chars.length) return str;
        }
        return "";
    }
}
// @lc code=end

