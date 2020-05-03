import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

public class Solution {
    public int longestSubarray(int[] nums, int limit) {
        Queue<int[]> smallQueue = new PriorityQueue<>(new Comparator<int[]>() {
            @Override
            public int compare(int[] t1, int[] t2) {
                return t1[0] - t2[0];
            }
        });

        Queue<int[]> bigQueue = new PriorityQueue<>(new Comparator<int[]>() {
            @Override
            public int compare(int[] t1, int[] t2) {
                return t2[0] - t1[0];
            }
        });

        int left = 0;
        int max = 0;
        for(int right = 0; right < nums.length; right++){
            smallQueue.add(new int[]{nums[right], right});
            bigQueue.add(new int[]{nums[right], right});

            //要破坏之前的 一定是加入了新的最大值 或 最小值
            int big = bigQueue.peek()[0];
            int small = smallQueue.peek()[0];

            while (big - small > limit){//发生破坏 需要更新left
                if(big == nums[right]){ //新加的为最大，去删除最小值
                    left = smallQueue.poll()[1] + 1; //把最小吐出去
                    while (smallQueue.peek()[1] < left) smallQueue.poll(); //在left之前的吐出去
                    small = smallQueue.peek()[0];
                } else { //新加的为最小
                    left = bigQueue.poll()[1] + 1; //把最小吐出去
                    while (bigQueue.peek()[1] < left) bigQueue.poll(); //在left之前的吐出去
                    big = bigQueue.peek()[0];
                }
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
    }

    public static void main(String[] args) {
        new Solution().longestSubarray(new int[]{8,2,4,7}, 4);
    }
}