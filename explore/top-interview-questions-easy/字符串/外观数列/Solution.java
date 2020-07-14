public class Solution {
    public String countAndSay(int n) {
        if(n == 1) return "1";
        String pre = countAndSay(n - 1);
        
        StringBuilder sb = new StringBuilder();
        char preChar = ' ';
        int count = 0;
        for(char c : pre.toCharArray()){
            if(c == preChar){
                count++;
                continue;
            }
            if(count > 0){
                sb.append(count);
                sb.append(preChar);
            }
            count = 1;
            preChar = c;
        }
        if(count > 0){
            sb.append(count);
            sb.append(preChar);
        }

        return sb.toString();
    }
}