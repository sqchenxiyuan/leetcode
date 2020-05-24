public class Solution {
    public int maxVowels(String s, int k) {
        if(s.length() < k) return 0;
        char[] chars = s.toCharArray();
        int count = 0;
        int max = 0;
        for(int i = 0 ; i < k - 1 ; i++){
            if(isaeiou(chars[i])){
                count++;
                max = Math.max(max, count);
            }
        }

        for(int i = k - 1; i < chars.length; i++){
            if(isaeiou(chars[i])){
                count++;
                max = Math.max(max, count);
            }
            if(isaeiou(chars[i - k + 1])){
                count--;
            }
        }

        return max;
    }

    private boolean isaeiou(char c){
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
}
