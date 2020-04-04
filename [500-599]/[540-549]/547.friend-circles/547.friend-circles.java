/*
 * @lc app=leetcode id=547 lang=java
 *
 * [547] Friend Circles
 */

// @lc code=start
import java.util.ArrayDeque;
import java.util.Queue;

public class Solution {
    public int findCircleNum(int[][] M) {
        int n = M.length;
        boolean[] viewed = new boolean[n];

        int count = 0;
        Queue<Integer> queue = new ArrayDeque<>();
        for(int i = 0; i < n; i++){
            if(viewed[i]) continue;
            queue.add(i);
            viewed[i] = true;

            while (queue.size() > 0){
                int from = queue.poll();
                for(int j = 0; j < n; j++){
                    if(viewed[j] || M[from][j] == 0) continue;
                    viewed[j] = true;
                    queue.add(j);
                }
            }
            count++;
        }
        return count;
    }
}
// @lc code=end

