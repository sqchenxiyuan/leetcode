
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class Solution {
    public int minSumOfLengths(int[] arr, int target) {
        int l = arr.length;
        int[] dp = new int[l + 1];
        dp[0] = 0;
        for(int i = 0; i < l; i++){
            dp[i + 1] = dp[i] + arr[i];
        }

        Map<Integer, Integer> map = new HashMap<>();
        PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        map.put(0, 0);

        for(int i = 0; i < l; i++){
            int sum = dp[i + 1];
            if(map.containsKey(sum - target)){
                int preI = map.get(sum - target);
                queue.add(new int[]{i + 1 - preI, preI, i + 1});
            }
            map.put(sum, i + 1);
        }

        if(queue.size() == 0) return -1;
        int[] min1 = queue.poll();
        int[] min2;
        while (true){
            if(queue.size() == 0) return -1;
            min2 = queue.poll();
            if(min2[2] <= min1[1] || min2[1] >= min1[2]) {
                break;
            }
        }

        return min1[0] + min2[0];
    }
}