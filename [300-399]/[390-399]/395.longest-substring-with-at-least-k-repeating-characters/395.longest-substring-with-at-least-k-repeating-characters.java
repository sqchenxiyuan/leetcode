import java.util.Arrays;

public class Solution {
    public int longestSubstring(String s, int k) {
        int[] arr = new int[26];
        Arrays.fill(arr, 0);
        
        for(char c : s.toCharArray()) {
            arr[c - 'a']++;
        }
        
        char breakChar = '0';
        for(int i = 0; i < 26; i++) {
            if(0 < arr[i] && arr[i] < k) {
                breakChar = (char)(i + (int)'a');
                break;
            }
        }
        
        if(breakChar == '0') return s.length();
        int max = 0;
        for(String str : s.split("" + breakChar)) {
            max = Math.max(max, longestSubstring(str, k));
        }
        
        return max;
    }
}