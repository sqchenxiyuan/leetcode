/*
 * @lc app=leetcode id=551 lang=java
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
public class Solution {
    public boolean checkRecord(String s) {
        char[] chars = s.toCharArray();
        boolean absent = false;
        int preCountOfL = 0;

        for(char c : chars){
            if(c == 'A'){
                if(absent) return false;
                absent = true;
                preCountOfL = 0;
            } else if(c == 'L'){
                if(preCountOfL == 2) return false;
                preCountOfL++;
            } else {
                preCountOfL = 0;
            }
        }

        return true;
    }
}
// @lc code=end

