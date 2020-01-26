/*
 * @lc app=leetcode id=459 lang=java
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
public class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int n = s.length();
        char[] cs = s.toCharArray();
        for(int i = 1; i < n; i++){
            if(n % i != 0) continue;
            boolean flag = true;
            for(int x = 0; x < i; x++){
                for (int y = x + i; y < n; y = y + i){
                    if(cs[y] != cs[y - i]){
                        flag = false;
                        break;
                    }
                }
                if(!flag) break;
            }
            if(flag) return true;
        }
        return false;
    }
}
// @lc code=end

