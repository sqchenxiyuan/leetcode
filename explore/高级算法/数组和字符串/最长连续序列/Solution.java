import java.util.*;

class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for(int num: nums){
            set.add(num);
        }
        
        int max = 0;
        for(int num: nums){
            int count = 1;
            if(!set.contains(num - 1)){
                while(set.contains(num + count)) count++;
            }
            max = Math.max(max, count);
        }
        return max;
    }
}