import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int num : arr){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        List<Integer> list = new ArrayList<>(map.values());
        list.sort((a, b) -> a - b);

        int count = 0;
        for(int num : list){
            if(k >= num){
                k -= num;
                count++;
            } else {
                break;
            }
        }

        return list.size() - count;
    }
}
