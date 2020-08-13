class Solution {
    public String longestPalindrome(String s) {
        char[] chars = new char[s.length() * 2 + 1];
        int x = 0;
        for(char c : s.toCharArray()){
            chars[x++] = '#';
            chars[x++] = c;
        }
        chars[x] = '#';

        int[] p = new int[chars.length];
        p[0] = 0;
        int ci = 0;
        int maxI = 0;
        for(int i = 1; i < p.length; i++){
            int l = 0;
            if(ci + p[ci] > i){
                l = Math.min(p[2 * ci - i], ci + p[ci] - i);
                p[i] = l;
                if(ci + p[ci] > i + p[i]) continue;
            }
            while(i - l - 1 >= 0 && i + l + 1 < chars.length && chars[i - l - 1] == chars[i + l + 1]) l++;
            p[i] = l;
            if(p[i] + i > p[ci] + ci){
                ci = i;
            }
            if(p[i] > p[maxI]){
                maxI = i;
            }
        }

        return s.substring((maxI - p[maxI]) / 2, (maxI + p[maxI]) / 2);
    }
}