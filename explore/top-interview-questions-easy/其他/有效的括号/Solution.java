class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(char c : s.toCharArray()){
            if(c == '(' || c == '[' || c== '{') {
                stack.add(c);
            } else if(stack.isEmpty()) {
                return false;
            } else {
                char pre = stack.peek();
                switch (c){
                    case ')': if(pre != '(') return false; break;
                    case '}': if(pre != '{') return false; break;
                    case ']': if(pre != '[') return false; break;
                }
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
}