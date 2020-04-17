/*
 * @lc app=leetcode id=564 lang=java
 *
 * [564] Find the Closest Palindrome
 */

// @lc code=start
public class Solution {
    private String mirrorString(String n){
        String str = n.substring(0, n.length() / 2);
        String p = str + (n.length() % 2 == 1 ? n.charAt(n.length() / 2) : "") + new StringBuilder(str).reverse().toString();
        return p;
    }


    //按照前缀进行翻转
    public String nearestPalindromic(String n) {
        if(n.equals("1")) return "0";
        char[] chars = n.toCharArray();

        long o = Long.valueOf(n); //原始
        long nummid = Long.valueOf(mirrorString(n));

        //中间位减一
        StringBuilder sb = new StringBuilder(n);
        int i = (n.length() - 1) / 2;
        while (i >= 0 && sb.charAt(i) == '0'){
            sb.setCharAt(i, '9');
            i--;
        }
        if(i == 0 && sb.charAt(i) == '1'){
            sb.delete(0, 1);
            int mid = sb.length() / 2;
            sb.setCharAt(mid, '9');
        } else {
            sb.setCharAt(i, (char)(sb.charAt(i) - 1));
        }
        long numsmall = Long.valueOf(mirrorString(sb.toString()));

        //中间位加一
        sb = new StringBuilder(n);
        i = (n.length() - 1) / 2;
        while (i >= 0 && sb.charAt(i) == '9'){
            sb.setCharAt(i, '0');
            i--;
        }
        if(i < 0){
            sb.insert(0, '1');
        } else {
            sb.setCharAt(i, (char)(sb.charAt(i) + 1));
        }
        long numbig = Long.valueOf(mirrorString(sb.toString()));

        long diff1 = Math.abs(nummid - o);
        long diff2 = Math.abs(numsmall - o);
        long diff3 = Math.abs(numbig - o);

        if(diff1 == 0) diff1 = Long.MAX_VALUE;

        if(diff2 <= diff1 && diff2 <= diff3){
            return String.valueOf(numsmall);
        } else if(diff1 <= diff2 && diff1 <= diff3 && diff1 != 0){
            return String.valueOf(nummid);
        } else {
            return String.valueOf(numbig);
        }
    }

    public static void main(String[] args) {
        new Solution().nearestPalindromic("1");
    }
}
// @lc code=end

