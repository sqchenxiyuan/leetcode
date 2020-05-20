/*
 * @lc app=leetcode.cn id=632 lang=java
 *
 * [632] 最小区间
 */

// @lc code=start

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {
        PriorityQueue<int[]> allQueue = new PriorityQueue<>((a ,b) -> a[0] == b[0] ? a[1] - b [1] : a[0] - b[0]);
        List<PriorityQueue<Integer>> queues = new ArrayList<>();
        for(int i = 0; i < nums.size(); i++){
            PriorityQueue<Integer> queue = new PriorityQueue<>((a ,b) -> a - b);
            for(int num : nums.get(i)){
                allQueue.add(new int[]{num, i});
                queue.add(num);
            }
            queues.add(queue);
        }

        int min = Integer.MAX_VALUE;
        int[] minSize = new int[]{0, Integer.MAX_VALUE};
        int maxNum = 0;
        for (PriorityQueue<Integer> q: queues){
            maxNum = Math.max(q.peek(), maxNum);
        }

        while (!allQueue.isEmpty()){

            int[] cur = allQueue.poll();
            int max = maxNum - cur[0];
            if(max < min){
                min = max;
                minSize = new int[]{cur[0], cur[0] + max};
            }

            queues.get(cur[1]).poll();
            if(queues.get(cur[1]).isEmpty()) break;
            maxNum = Math.max(maxNum, queues.get(cur[1]).peek());
        }

        return minSize;
    }
}
// @lc code=end

