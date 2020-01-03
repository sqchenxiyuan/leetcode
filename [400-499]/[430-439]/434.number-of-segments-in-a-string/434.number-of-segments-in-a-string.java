/*
 * @lc app=leetcode id=434 lang=java
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
public class Solution {
    public int countSegments(String s) {
        int count = 0;
        boolean preIsWord = false;
        for(char c : s.toCharArray()){
            if(c == ' '){
                preIsWord = false;
            } else if(!preIsWord){
                preIsWord = true;
                count++;
            }
        }
        return count;
    }
}
// @lc code=end

