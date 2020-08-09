import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public int maxNonOverlapping(int[] nums, int target) {
        int[] dp = new int[nums.length + 1];
        dp[0] = 0;
        Map<Integer, Integer> map = new HashMap<>();
        int sum = 0;
        map.put(0, -1);
        List<int[]> list = new ArrayList<>();
        for(int i = 0; i < nums.length; i++){
            sum = sum + nums[i];
            if(map.containsKey(sum - target)){
                list.add(new int[]{map.get(sum - target) + 1, i});
            }
            map.put(sum, i);
        }
        int pre = -1;
        int count = 0;
        for(int[] arr : list){
            if(arr[0] > pre){
                count++;
                pre = arr[1];
            }
        }
        return count;
    }

    public static void main(String[] args) {
        new Solution().maxNonOverlapping(new int[]{1,1,1,1,1}, 2);
    }
}