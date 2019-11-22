/*
 * @lc app=leetcode id=383 lang=java
 *
 * [383] Ransom Note
 */

// @lc code=start
import java.util.Arrays;

//class Solution {
//    public boolean canConstruct(String ransomNote, String magazine){
//        if(ransomNote.length() > magazine.length()) return false;
//
//        Map<Character, Integer> map = new HashMap<Character, Integer>();
//        for (int i = 0; i < magazine.length(); i++){
//            char c = magazine.charAt(i);
//            int cur = map.containsKey(c) ? map.get(c) : 0;
//            map.put(c, cur + 1);
//        }
//
//        for (int i = 0; i < ransomNote.length(); i++){
//            char c = ransomNote.charAt(i);
//            if(!map.containsKey(c)) return false;
//            int cur = map.get(c);
//            if(cur == 0) return false;
//            map.put(c, cur - 1);
//        }
//
//        return true;
//    }
//}

class Solution {
    public boolean canConstruct(String ransomNote, String magazine){
        if(ransomNote.length() > magazine.length()) return false;
        int[] magazineArr = new int[26];
        Arrays.fill(magazineArr, 0);

        for (int i = 0; i < magazine.length(); i++){
            char c = magazine.charAt(i);
            magazineArr[c - 97]++;
        }

        for (int i = 0; i < ransomNote.length(); i++){
            char c = ransomNote.charAt(i);
            magazineArr[c - 97]--;
            if(magazineArr[c - 97] < 0) return false;
        }

        return true;
    }
}

class Main{

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.canConstruct("aa", "ab"));
//        System.out.println(s.canConstruct("aa", "aa"));
    }
}

// @lc code=end