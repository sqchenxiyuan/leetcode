public class Solution {
    public boolean isPalindrome(String s) {
        char[] chars = s.toLowerCase().toCharArray();
        int left = 0, right = chars.length - 1;
        while(left < right){
            while(left < right && !isUseableChar(chars[left])) left++;
            while(left < right && !isUseableChar(chars[right])) right--;
            if(chars[left] != chars[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    private boolean isUseableChar(char c){
        return 'a' <= c && c <= 'z'  || '0' <= c && c <= '9';
    }
}