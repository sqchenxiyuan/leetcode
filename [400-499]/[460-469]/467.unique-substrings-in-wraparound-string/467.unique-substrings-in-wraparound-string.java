/*
 * @lc app=leetcode id=467 lang=java
 *
 * [467] Unique Substrings in Wraparound String
 */

// @lc code=start
public class Solution {
    public int findSubstringInWraproundString(String p) {
        if(p.length() == 0) return 0;
        int[] charCounts = new int[26];
        int count = 0;
        int len = 0;
        int pre = -1;
        for(int i = 0; i < p.length(); i++){
            int c = p.charAt(i) - 'a';
            if(((c - pre + 26) % 26) == 1){
                len++;
            } else {
                len = 1;
            }
            if(charCounts[c] < len){
                count = count + len - charCounts[c];
                charCounts[c] = len;
            }
            pre = c;
        }
        return count;
    }
}
// @lc code=end

