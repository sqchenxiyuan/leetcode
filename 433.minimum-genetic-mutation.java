/*
 * @lc app=leetcode id=433 lang=java
 *
 * [433] Minimum Genetic Mutation
 */

// @lc code=start
import java.util.*;

public class Solution {
    public int minMutation(String start, String end, String[] bank) {
        if(start.equals(end)) return 0;

        boolean endIsValid = false;
        for(String str : bank){
            if(str.equals(end)){
                endIsValid = true;
            }
        }
        if(!endIsValid) return -1;

        //广度遍历
        Set<String> set = new HashSet<>();
        List<String> arr = new ArrayList<>();
        List<String> next = new ArrayList<>();
        arr.add(start);
        int step = 1;
        while (arr.size() > 0){
            for(String from : arr){
                for(String to : bank){
                    if(set.contains(to)) continue;
                    if(hammingDistance(from, to) == 1){
                        if(to.equals(end)) return step;
                        next.add(to);
                    }
                }
            }
            step++;
            arr = next;
            next = new ArrayList<>();
        }

        return -1;
    }

    private int hammingDistance(String str1, String str2){
        if(str1.length() != str2.length()) return Integer.MAX_VALUE;
        char[] chars1 = str1.toCharArray();
        char[] chars2 = str2.toCharArray();

        int count = 0;
        for(int i = 0; i < chars1.length; i++){
            if(chars1[i] != chars2[i]) count++;
        }
        return count;
    }
}
// @lc code=end

