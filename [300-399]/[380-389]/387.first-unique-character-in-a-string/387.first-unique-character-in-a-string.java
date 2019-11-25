/*
 * @lc app=leetcode id=387 lang=java
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
import java.util.Arrays;

public class Solution {

    static private char CHAR_A = 'a';

    public int firstUniqChar(String s) {
        boolean[] one = new boolean[26];
        boolean[] more = new boolean[26];
        Arrays.fill(one, false);
        Arrays.fill(more, false);

        for(int i = 0; i < s.length(); i++){
            int c = s.charAt(i) - CHAR_A;
            if(more[c]) continue;;
            if(one[c]){
                one[c] = false;
                more[c] = true;
            } else {
                one[c] = true;
            }
        }

        for(int i = 0; i < s.length(); i++){
            int c = s.charAt(i) - CHAR_A;
            if(one[c]) return i;
        }

        return -1;
    }
}
// @lc code=end

