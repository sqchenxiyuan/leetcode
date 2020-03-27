/*
 * @lc app=leetcode id=537 lang=java
 *
 * [537] Complex Number Multiplication
 */

// @lc code=start
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Solution {
    private static Pattern p = Pattern.compile("(\\-?\\d+)\\+(\\-?\\d+)i");

    public String complexNumberMultiply(String a, String b) {
        int[] a1 = parse(a);
        int[] b1 = parse(b);

        int x = a1[0] * b1[0] - a1[1] * b1[1];
        int y = a1[0] * b1[1] + a1[1] * b1[0];
        StringBuilder sb = new StringBuilder();
        sb.append(x);
        sb.append('+');
        sb.append(y);
        sb.append('i');
        return sb.toString();
    }

    private int[] parse(String str){
        Matcher m = p.matcher(str);
        if(m.matches()){
            return new int[]{Integer.valueOf(m.group(1)), Integer.valueOf(m.group(2))};
        }
        return new int[]{0, 0};
    }

    public static void main(String[] args) {
        new Solution().complexNumberMultiply("-1+1i","1+-2i");
    }
}
// @lc code=end

