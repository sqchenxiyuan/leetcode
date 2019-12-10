import java.util.Stack;

public class Solution {
       
    
    public String removeKdigits(String num, int k) {
        Stack<Character> stack = new Stack<>();
        
        int n = num.length();
        int keep = n - k;
        for(char c : num.toCharArray()) {
            while (k > 0 && stack.size() > 0 && stack.peek() > c) {
                stack.pop();
                k--;
            }
            stack.add(c);
        }
        
        while (k > 0) {
            stack.pop();
            k--;
        }
        
        char[] characters = new char[stack.size()];
        for(int i = 0; i < characters.length; i++) {
            characters[i] = stack.get(i);
        }
        
        String str = new String(characters);
        //去除前缀0
        int x = 0;
        while(x < str.length() && str.charAt(x) == '0') x++;
        str = str.substring(x);
        
        if(str.length() == 0) str = "0";
        
        return str; 
    }
    
    public static void main(String[] args) {
        System.out.println(new Solution().removeKdigits("1432219", 3));
    }
}