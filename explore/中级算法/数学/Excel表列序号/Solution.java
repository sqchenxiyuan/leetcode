public class Solution {
    public int titleToNumber(String s) {
        char[] chars = s.toCharArray();
        int res = 0;
        int base = 1;
        for(int i = chars.length - 1; i >= 0; i--){
            int x = chars[i] - 'A' + 1;
            res += x * base;
            base *= 26;
        }
        return res;
    }
}