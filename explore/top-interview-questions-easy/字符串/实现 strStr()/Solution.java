public class Solution {
    public int strStr(String haystack, String needle) {
        if(needle.isEmpty()) return 0;
        if(haystack.length() < needle.length()) return -1;
        char[] h = haystack.toCharArray();
        char[] n = needle.toCharArray();
        int[] map = new int[256];

        for(int i = 0; i < n.length; i++){
            map[n[i]] = i;
        }

        int left = 0;
        loop1: while(left + n.length <= h.length){
            for(int i = 0; i < n.length; i++){
                if(h[left + i] == n[i]) continue;
                if(left + n.length < h.length){
                    left = left + n.length - map[h[left + n.length]];
                    continue loop1;
                } else {
                    break loop1;
                }
            }
            return left;
        }

        return -1;
    }
}