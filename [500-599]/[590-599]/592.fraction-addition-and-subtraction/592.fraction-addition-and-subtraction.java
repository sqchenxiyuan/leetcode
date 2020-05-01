/*
 * @lc app=leetcode.cn id=592 lang=java
 *
 * [592] 分数加减运算
 */

// @lc code=start
class Fraction{
    int molecular; //分子
    int denominator; //分母

    Fraction (int m, int d){
        molecular = m;
        denominator = d;
    }

}

public class Solution {
    public String fractionAddition(String expression) {
        boolean negative = false; //是否为负数
        char[] chars = expression.toCharArray();
        int len = chars.length;

        Fraction res = new Fraction(0, 1);

        for(int i = 0; i < len;){
            if(chars[i] == '-'){
                negative = true;
                i++;
            } else if(chars[i] == '+'){
                negative = false;
                i++;
            } else {
                //分子
                int molecular = 0;
                while ( i < len && '0' <= chars[i] && chars[i] <= '9'){
                    molecular = molecular * 10 + (chars[i] - '0');
                    i++;
                }
                i++; //  /号
                //分母
                int denominator = 0;
                while ( i < len && '0' <= chars[i] && chars[i] <= '9'){
                    denominator = denominator * 10 + (chars[i] - '0');
                    i++;
                }
                if(negative) molecular = -molecular;
                res = fractionAdd(res, new Fraction(molecular, denominator));

                negative = false;
            }
        }

        return String.valueOf(res.molecular) + "/" + String.valueOf(res.denominator);
    }

    private Fraction fractionAdd(Fraction a, Fraction b){
        int denominator = a.denominator * b.denominator / gcd(a.denominator, b.denominator); //最小公倍数
        int molecular = a.molecular * denominator / a.denominator + b.molecular * denominator / b.denominator;
        int g = gcd(molecular, denominator);


        return new Fraction(molecular / g, denominator / g);
    }

    //最小公约数
    private int gcd(int a, int b){
        a = Math.abs(a);
        b = Math.abs(b);
        while (b > 0){
            int x = a % b;
            a = b;
            b = x;
        }
        return a;
    }

    public static void main(String[] args) {
        new Solution().fractionAddition("1/3-1/2");
    }
}
// @lc code=end

