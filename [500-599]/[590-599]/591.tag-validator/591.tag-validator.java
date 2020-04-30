/*
 * @lc app=leetcode.cn id=591 lang=java
 *
 * [591] 标签验证器
 */

// @lc code=start
import java.util.Stack;

public class Solution {
    public boolean isValid(String code) {
        char[] chars = code.toCharArray();
        Stack<String> stack = new Stack<>();

        for(int i = 0; i < chars.length; ){
            if(chars[i] == '<' && i < chars.length - 1){
                int j = i + 1;

                if('A' <= chars[j] && chars[j] <= 'Z'){
                    //起始标签
                    while ('A' <= chars[j] && chars[j] <= 'Z' && j < chars.length - 1) j++;
                    int l = j - i - 1;
                    if(chars[j] == '>' && 1 <= l && l <= 9){
                        stack.add(code.substring(i + 1, j));
                        i = j + 1;
                    } else {
                        return false;
                    }
                } else if(chars[j] == '/'){
                    if(stack.size() == 0) return false;
                    j++;
                    //结束标签
                    while ('A' <= chars[j] && chars[j] <= 'Z' && j < chars.length - 1) j++;
                    int l = j - i - 2;
                    if(chars[j] == '>' && 1 <= l && l <= 9 && stack.peek().equals(code.substring(i + 2, j))){
                        stack.pop();
                        if(stack.size() == 0 && j != chars.length - 1) return false;
                        i = j + 1;
                    } else {
                        return false;
                    }
                } else if(chars[j] == '!'){
                    if(stack.size() == 0){
                        return false;
                    }
                    if(i + 9 < chars.length && code.substring(i, i + 9).equals("<![CDATA[")){
                        //CDATA
                        j = j + 8;
                        while (j < chars.length && !(chars[j - 2] == ']' && chars[j - 1] == ']' && chars[j] == '>')){
                            j++;
                        }
                        //结束CDATA
                        i = j + 1;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                if(stack.size() > 0){
                    i++;
                } else {
                    return false;
                }
            }
        }

        if (stack.size() > 0){
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        new Solution().isValid("<A><A></A>< /A>");
    }
}
// @lc code=end

