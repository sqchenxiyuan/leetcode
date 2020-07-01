import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int num : nums1){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        List<Integer> arr = new ArrayList<>();

        for(int num : nums2){
            if(map.getOrDefault(num, 0) > 0){
                arr.add(num);
                map.put(num, map.get(num) - 1);
            }
        }
        int[] res = new int[arr.size()];
        int i = 0;
        for(int n : arr){
            res[i++] = n;
        }
        return res;
    }
}
