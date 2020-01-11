/*
 * @lc app=leetcode id=443 lang=java
 *
 * [443] String Compression
 */

// @lc code=start
public class Solution {
    public int compress(char[] chars) {
        int res = 0;
        char pre = 0;
        int count = 0;
        for(char c : chars){
            if(c == pre){
                count++;
            } else {
                res = addCompressData(chars, res, pre, count);
                count = 1;
                pre = c;
            }
        }
        res = addCompressData(chars, res, pre, count);

        return res;
    }

    private int addCompressData(char[] chars, int startIndex, char c, int count){
        if(count == 0) return startIndex;

        int endIndex = startIndex;
        chars[endIndex] = c;
        endIndex++;
        if(count == 1) return endIndex;

        int l = getNumberCharsLength(count);
        endIndex += l;
        for(int i = 1; i <= l; i++){
            chars[endIndex - i] = (char)(count % 10 + '0');
            count /= 10;
        }
        return endIndex;
    }

    private int getNumberCharsLength(int number){
        int l = 0;
        int n = number;
        while (n > 0){
            n = n / 10;
            l++;
        }
        return l;
    }
}
// @lc code=end

