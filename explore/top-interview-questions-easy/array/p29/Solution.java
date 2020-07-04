import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Set<Integer> set = new HashSet<>();
        for(int num : nums){
            if(set.contains(target - num)) return new int[]{num, target - num};
            set.add(num);
        }

        return null;
    }
}
