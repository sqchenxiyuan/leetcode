/*
 * @lc app=leetcode.cn id=657 lang=java
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
public class Solution {
    public boolean judgeCircle(String moves) {
        int top = 0;
        int left = 0;

        for(char c : moves.toCharArray()){
            switch (c){
                case 'U': top++; break;
                case 'D': top--; break;
                case 'L': left++; break;
                case 'R': left--; break;
            }
        }

        return top == 0 && left == 0;
    }
}
// @lc code=end

