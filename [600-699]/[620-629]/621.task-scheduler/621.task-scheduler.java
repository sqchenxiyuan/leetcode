/*
 * @lc app=leetcode.cn id=621 lang=java
 *
 * [621] 任务调度器
 */

// @lc code=start
import java.util.*;

public class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] arr = new int[26];
        for(char c : tasks){
            arr[c - 'A']++;
        }

        PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());

        for(int x : arr){
            if(x > 0) queue.add(x);
        }

        int count = 0;
        while (queue.size() > 0){
            int i = 0;
            List<Integer> list = new ArrayList<>();
            while (i <= n){
                if(queue.size() > 0){
                    int num = queue.poll();
                    num--;
                    if(num > 0){
                        list.add(num);
                    }
                }

                i++;
                count++;

                if(list.size() == 0 && queue.size() == 0){
                    break;
                }
            }

            for(int x : list){
                queue.add(x);
            }
        }

        return count;
    }
}
// @lc code=end

