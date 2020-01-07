/*
 * @lc app=leetcode id=438 lang=java
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        int sl = s.length();
        int pl = p.length();

        int[] curCounts = new int[26];
        int[] pCounts = new int[26];

        char[] sChars = s.toCharArray();
        char[] pChars = p.toCharArray();

        List<Integer> res = new ArrayList<>();
        if(sl < pl) return res;

        for(int i = 0; i < pl; i++){
            curCounts[sChars[i] - 'a']++;
            pCounts[pChars[i] - 'a']++;
        }
        if(arrEq(curCounts, pCounts, 26)) res.add(0);

        for(int i = 0; i < sl - pl; i++){
            curCounts[sChars[i] - 'a']--;
            curCounts[sChars[i + pl] - 'a']++;
            if(arrEq(curCounts, pCounts, 26)) res.add(i +1);
        }

        return res;
    }

    private boolean arrEq(int[] A, int[] B, int n){
        for(int i = 0; i < n; i++){
            if(A[i] != B[i]) return false;
        }
        return true;
    }
}
// @lc code=end

