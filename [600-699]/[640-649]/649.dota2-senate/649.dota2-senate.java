/*
 * @lc app=leetcode.cn id=649 lang=java
 *
 * [649] Dota2 参议院
 */

// @lc code=start
import java.util.ArrayDeque;
import java.util.Queue;

public class Solution {
    public String predictPartyVictory(String senate) {
        Queue<Character> q = new ArrayDeque<>();
        int RCount = 0;
        int DCount = 0;

        for(char c : senate.toCharArray()){
            if(c == 'R'){
                RCount++;
                q.add('R');
            } else {
                DCount++;
                q.add('D');
            }
        }

        int RPower = 0;
        int DPower = 0;

        while (RCount > 0 && DCount > 0){
            char x = q.poll();
            if(x == 'R'){
                if(DPower > 0){
                    DPower--;
                    RCount--;
                } else {
                    RPower++;
                    q.add(x);
                }
            } else {
                if(RPower > 0){
                    RPower--;
                    DCount--;
                } else {
                    DPower++;
                    q.add(x);
                }
            }
        }

        return RCount == 0 ? "Dire" : "Radiant";
    }
}
// @lc code=end

