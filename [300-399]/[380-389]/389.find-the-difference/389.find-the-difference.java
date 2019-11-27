/*
 * @lc app=leetcode id=389 lang=java
 *
 * [389] Find the Difference
 */

// @lc code=start
import java.util.Arrays;

public class Solution {

    public char findTheDifference(String s, String t) {
        int[] cache = new int[26];
        int CHAR_A = (int)'a';
        Arrays.fill(cache, 0);

        for(char c : s.toCharArray()) cache[c - CHAR_A]++;
        for(char c : t.toCharArray()) cache[c - CHAR_A]--;

        int i = 0;
        while (cache[i] == 0) i++;

        return (char)(i + CHAR_A);
    }
}
// @lc code=end