/*
 * @lc app=leetcode id=455 lang=java
 *
 * [455] Assign Cookies
 */

// @lc code=start
import java.util.Arrays;

class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int i = 0;
        int j = 0;
        while (j < s.length && i < g.length){
            if(g[i] <= s[j]){
                i++;
            }
            j++;
        }
        return i;
    }
}
// @lc code=end

