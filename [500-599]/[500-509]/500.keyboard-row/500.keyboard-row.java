/*
 * @lc app=leetcode id=500 lang=java
 *
 * [500] Keyboard Row
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static int line1 = getSymbol("qwertyuiop");
    private static int line2 = getSymbol("asdfghjkl");
    private static int line3 = getSymbol("zxcvbnm");

    public String[] findWords(String[] words) {
        List<String> arr = new ArrayList<>();
        for(String word : words){
            int s = getSymbol(word);
            if((line1 | s) == line1 ||
                (line2 | s) == line2 ||
                (line3 | s) == line3){
                arr.add(word);
            }
        }
        return arr.toArray(new String[arr.size()]);
    }

    static private int getSymbol(String str){
        int num = 0;
        str = str.toLowerCase();
        for(char c : str.toCharArray()){
            num = num | (1 << c - 'a');
        }
        return num;
    }
}
// @lc code=end

