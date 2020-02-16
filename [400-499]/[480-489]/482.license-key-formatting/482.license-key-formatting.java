/*
 * @lc app=leetcode id=482 lang=java
 *
 * [482] License Key Formatting
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public String licenseKeyFormatting(String S, int K) {
        List<Character> arr = new ArrayList<>();
        for(char c : S.toCharArray()){
            if('0' <= c && c <= '9' || 'A' <= c && c <= 'Z') arr.add(c);
            if('a' <= c && c <= 'z') arr.add((char)(c - 'a' + 'A'));
        }
        int len = arr.size();
        StringBuilder sb = new StringBuilder();
        for(int i = 1; i <= len; i++){
            if(i > 1 && (i - 1) % K == len % K){
                sb.append('-');
            }
            sb.append(arr.get(i - 1));
        }
        return sb.toString();
    }
}
// @lc code=end

