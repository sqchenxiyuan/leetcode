/*
 * @lc app=leetcode.cn id=647 lang=java
 *
 * [647] 回文子串
 */

// @lc code=start
public class Solution {
    public int countSubstrings(String s) {
        int len = s.length() * 2 + 1;
        char[] chars = new char[len];
        int x = 0;
        for(char c : s.toCharArray()){
            chars[x++] = '#';
            chars[x++] = c;
        }
        chars[x++] = '#';

        int[] p = new int[len];

        int count = 0;
        int ci = 0;
        p[0] = 0;
        for(int i = 1; i < len; i++){
            int l = 0;
            if(ci + p[ci] >= i){
                int j = ci * 2 - i;
                l = Math.min(p[j], ci + p[ci] - i);
            }

            int left = i - l - 1;
            int right = i + l + 1;

            while (left >= 0 && right < len && chars[left--] == chars[right++]){
                l++;
            }

            p[i] = l;
            if(i + p[i] > p[ci] + ci){
                ci = i;
            }
            if(chars[i] == '#'){ //偶数
                count += l / 2;
            } else {
                count += l / 2 + 1;
            }
        }

        return count;
    }
}
// @lc code=end

