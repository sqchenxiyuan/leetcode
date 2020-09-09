import java.util.*;

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for(String token : tokens){
            if(token.equals("+")){
                int y = stack.pop();
                int x = stack.pop();
                stack.push(x + y);
            } else if(token.equals("-")){
                int y = stack.pop();
                int x = stack.pop();
                stack.push(x - y);
            } else if(token.equals("*")){
                int y = stack.pop();
                int x = stack.pop();
                stack.push(x * y);
            } else if(token.equals("/")){
                int y = stack.pop();
                int x = stack.pop();
                stack.push(x / y);
            } else {
                stack.push(Integer.valueOf(token));
            }
        }
        return stack.pop();
    }
}