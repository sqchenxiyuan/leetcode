import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    
    static Map<Integer, List<Integer>> hoursMap = new HashMap<Integer, List<Integer>>(); 
    static Map<Integer, List<Integer>>  minutesMap = new HashMap<Integer, List<Integer>>(); 
    static {
        for(int i = 0; i < 12; i++) {
            int n = getLightCount(i);
            if(!hoursMap.containsKey(n)) hoursMap.put(n, new ArrayList<>());
            hoursMap.get(n).add(i);
        }
        
        for(int i = 0; i < 60; i++) {
            int n = getLightCount(i);
            if(!minutesMap.containsKey(n)) minutesMap.put(n, new ArrayList<>());
            minutesMap.get(n).add(i);
        }
    }
    
    static int getLightCount(int num) {
        int count = 0;
        while(num != 0) {
            if((num & 1) == 1) count++;
            num = num >> 1;
        }
        return count;
    }

        
    public List<String> readBinaryWatch(int num) {
        List<String> results = new ArrayList<>();
        
        for(int i = 0; i <= 3; i++) {
            List<Integer> hours = hoursMap.get(i);
            List<Integer> minutes = minutesMap.get(num - i);
            if(hours == null || minutes == null) continue;
            for(int hour : hours) {
                for(int minute : minutes) {
                    results.add(String.format("%d:%02d", hour , minute));
                }
            }
        }
        
        return results;
    }
    
    public static void main(String[] args) {
        System.out.println(new Solution().readBinaryWatch(3));
    }
}