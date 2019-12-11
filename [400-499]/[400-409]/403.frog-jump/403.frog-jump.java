import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Solution {
    public boolean canCross(int[] stones) {
        Map<Integer, Set<Integer>> step = new HashMap<Integer, Set<Integer>>();
        int len = stones.length;
        for(int i = 0; i < len; i++) {
            step.put(i, new HashSet<>());
        }
        step.get(0).add(1);
        
        for(int i = 1; i < len; i++) {
            Set<Integer> set = step.get(i);
            
            for(int j = 0; j < i; j++) {
                int d = stones[i] - stones[j];
                if(step.get(j).contains(d)) {
                    set.add(d);
                    set.add(d + 1);
                    set.add(d - 1);
                }
            }
            
        }
        
        return step.get(len - 1).size() > 0;
    }
}