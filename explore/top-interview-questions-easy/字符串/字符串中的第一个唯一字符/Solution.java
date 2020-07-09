public class Solution {
    public int firstUniqChar(String s) {
        int[] arr = new int[26];
        char[] chars = s.toCharArray();
        for(char c : chars){
            if(arr[c - 'a'] == 2) continue; 
            if(arr[c - 'a'] == 0){
                arr[c - 'a'] = 1;
            } else {
                arr[c - 'a'] = 2;
            }
        }
        for(int i = 0; i < chars.length; i++){
            if(arr[chars[i] - 'a'] == 2) continue;
            return i;
        }
        return -1;
    }
}