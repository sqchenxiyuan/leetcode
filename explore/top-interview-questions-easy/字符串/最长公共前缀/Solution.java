public class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) return "";
        int l = 0;
        loop1:while(true){
            for(int i = 0; i < strs.length; i++){
                if(strs[i].length() <= l) break loop1;
                if(strs[i].charAt(l) == strs[0].charAt(l)) continue;
                break loop1;
            }
            l++;
        }
        return strs[0].substring(0, l);
    }
}