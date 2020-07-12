public class Solution {
    public int myAtoi(String str) {
        int isNegative = 1;
        int stage = 0;
        long num = 0;
        for(char c : str.toCharArray()){
            if(stage == 0){
                if(c == ' '){
                    continue;
                } else if(c == '-'){
                    isNegative = -1;
                    stage = 1;
                    continue;
                } else if(c == '+') {
                    isNegative = 1;
                    stage = 1;
                    continue;
                }
            }
            stage = 1;
            if('0' <= c && c <= '9'){
                num = num * 10 + ((c - '0') * isNegative);
                if(num > Integer.MAX_VALUE){
                    return Integer.MAX_VALUE;
                } else if(num < Integer.MIN_VALUE) {
                    return Integer.MIN_VALUE;
                }
            } else {
                break;
            }
        }

        return (int)num;
    }
}