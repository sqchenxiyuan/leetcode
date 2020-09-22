import java.util.*;

class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> tmap = new HashMap<>();
        for(char c : t.toCharArray()){
            tmap.put(c, tmap.getOrDefault(c, 0) + 1);
        }

        int cCount = tmap.size();
        int left = 0;
        int right = 0;
        char[] sChars = s.toCharArray();
        String res = "";
        while(right < sChars.length){
            char c = sChars[right];
            if(tmap.containsKey(c)){
                int nextCount = tmap.get(c) - 1;
                tmap.put(c, nextCount);
                if(nextCount == 0) cCount--;

                //满足要求
                if(cCount == 0){
                    while(left <= right){
                        char lc = sChars[left];
                        if(tmap.containsKey(lc)){
                            int nextLCount = tmap.get(lc) + 1;
                            if(nextLCount > 0){
                                if(res.isEmpty() || right - left + 1 < res.length()) res = s.substring(left, right + 1);
                                break;
                            } else {
                                tmap.put(lc, nextLCount);
                                left++;
                            }
                        } else {
                            left++;
                        }
                    }
                }
            }
            right++;
        }
        return res;
    }

    public static void main(String[] args) {
        new Solution().minWindow("A", "A");
    }
}