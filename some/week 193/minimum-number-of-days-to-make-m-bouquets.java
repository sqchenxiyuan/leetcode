
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class Solution {
    private Map<String, Integer> cache = new HashMap<>();

    public int minDays(int[] bloomDay, int m, int k) {
        int len = bloomDay.length;
        if(m * k > len) return -1;
        PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        for(int i = 0; i < len; i++){
            queue.add(new int[]{i, bloomDay[i]});
        }

        boolean[] map = new boolean[len];
        int count = k * m;
        int min = 0;
        while (count > 0){
            int[] x = queue.poll();
            map[x[0]] = true;
            min = x[1];
            count--;
        }

        while (true){
            int s = isOk(map, m, k);
            if(s == 0) break;
            while (s > 0){
                int[] x = queue.poll();
                map[x[0]] = true;
                min = x[1];
                s--;
            }
        }

        return min;
    }

    public int isOk(boolean[] map, int m, int k){
        int len = map.length;
        loop1: for(int i = 0; i < len - k + 1 && m > 0; i++){
            for(int j = 0; j < k; j++){
                if(!map[i + j]){
                    i = i + j;
                    continue loop1;
                }
            }
            i = i + k - 1;
            m--;
        }
        return m;
    }

    public static void main(String[] args) {
        new Solution().minDays(new int[]{7,7,7,7,12,7,7},
                2,
                3);
    }
}