import java.util.*;

class Solution {
    public int calculate(String s) {
        s = s.replace(" ", "");
        if(isNumber(s.charAt(0))) s = "+" + s;
        Stack<Integer> stack = new Stack<>();
        char[] chars = s.toCharArray();
        for(int i = 0; i < chars.length;){
            char op = chars[i];
            boolean fu = false;
            if(op == '-'){
                fu = true;
            }
            if(op == '*' || op == '/'){
                if(chars[i+1] == '-'){
                    fu = true;
                    i++;
                } else if(chars[i+1] == '+') {
                    i++;
                }
            }
            int num = 0;
            i++;
            while(i < chars.length && isNumber(chars[i])){
                num = num * 10 + (chars[i] - '0');
                i++;
            }
            if(fu) num = -num;
            if(op == '+' || op == '-'){
                stack.add(num);
            } else if(op == '-'){
                stack.add(-num);
            } else if(op == '*'){
                stack.add(stack.pop() * num);
            } else {
                stack.add(stack.pop() / num);
            }
        }
        return stack.stream().reduce(0, (sum, a) -> sum + a);
    }

    private boolean isNumber(char c){
        return '0' <= c && c <= '9';
    }
}