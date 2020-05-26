/*
 * @lc app=leetcode.cn id=639 lang=java
 *
 * [639] 解码方法 2
 */

// @lc code=start
public class Solution {
    private int base = (int)1e9 + 7;

    public int numDecodings(String s) {
        char[] chars = s.toCharArray();
        long x1 = 1;
        long x2 = chars[0] == '*' ? 9 : (chars[0] == '0' ? 0 : 1);
        for(int i = 1; i < chars.length; i++){
            long x3 = 0;
            char cur = chars[i];
            char pre = chars[i - 1];

            if(cur == '*'){
                x3 += 9 * x2;
                if(pre == '1'){ //1*   9
                    x3 += 9 * x1;
                } else if(pre == '2') { // 2* 6
                    x3 += 6 * x1;
                } else if(pre == '*') { // ** 24
                    x3 += 15 * x1;
                }
            } else {
                x3 += cur == '0' ? 0 : x2;
                if(pre == '1' || pre == '2' && cur <= '6' ){
                    x3 += x1;
                } else if(pre == '*') {
                    if(cur <= '6'){// 1c 2c
                        x3 += 2 * x1;
                    } else { // 1c
                        x3 += x1;
                    }
                }
            }
            x1 = x2;
            x2 = x3 % base;
        }

        return (int)x2;
    }

    public static void main(String[] args) {
        new Solution().numDecodings("10422**4422");
    }
}
// @lc code=end

