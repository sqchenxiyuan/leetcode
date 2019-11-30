public class Solution {
    
    public boolean isSubsequence(String s, String t) {
        if(s.length() > t.length()) return false;
        int i1 = 0;
        int i2 = 0;
        
        while (i1 < s.length()) {
            char sc = s.charAt(i1);
            while (i2 < t.length() && sc != t.charAt(i2)) i2++;
            if(i2 == t.length()) return false;
            i1++;
            i2++;
        }
        
        return i1 == s.length();
    }

}
