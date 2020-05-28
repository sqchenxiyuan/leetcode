/*
 * @lc app=leetcode.cn id=640 lang=java
 *
 * [640] 求解方程
 */

// @lc code=start
public class Solution {
    public String solveEquation(String equation) {
        char[] chars = equation.toCharArray();

        // ax + b = 0;
        int a = 0;
        int b = 0;

        boolean afterEqual = false;
        int preNumIndex = -1;
        boolean preSum = true;
        for(int i = 0; i < chars.length; i++){
            char c = chars[i];
            if(c == '='){
                if(preNumIndex != -1){
                    int num = Integer.valueOf(equation.substring(preNumIndex, i));
                    b = b + ((afterEqual ^ preSum) ? num : -num);
                }
                preNumIndex = -1;
                afterEqual = true;
                preSum = true;
            } else if(c == '+'){
                if(preNumIndex != -1){
                    int num = Integer.valueOf(equation.substring(preNumIndex, i));
                    b = b + ((afterEqual ^ preSum) ? num : -num);
                }
                preNumIndex = -1;
                preSum = true;
            } else if(c == '-'){
                if(preNumIndex != -1){
                    int num = Integer.valueOf(equation.substring(preNumIndex, i));
                    b = b + ((afterEqual ^ preSum) ? num : -num);
                }
                preNumIndex = -1;
                preSum = false;
            } else if(c == 'x'){
                if(preNumIndex != -1){
                    int num = Integer.valueOf(equation.substring(preNumIndex, i));
                    a = a + ((afterEqual ^ preSum) ? num : -num);
                } else {
                    if(afterEqual ^ preSum) a++;
                    else a--;
                }
                preNumIndex = -1;
            } else {
                if(preNumIndex == -1){
                    preNumIndex = i;
                }
            }
        }
        if(preNumIndex != -1){
            int num = Integer.valueOf(equation.substring(preNumIndex, chars.length));
            b = b + ((afterEqual ^ preSum) ? num : -num);
        }

        if(a == 0 && b == 0){
            return "Infinite solutions";
        } else if(a == 0){
            return "No solution";
        } else {
            return "x=" + (-b / a);
        }
    }
}
// @lc code=end

