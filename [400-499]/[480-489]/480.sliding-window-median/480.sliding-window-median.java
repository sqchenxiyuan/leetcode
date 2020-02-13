/*
 * @lc app=leetcode id=480 lang=java
 *
 * [480] Sliding Window Median
 */

// @lc code=start
import java.util.*;

class MidPriorityQueue{
    private PriorityQueue big = new PriorityQueue<Integer>(new Comparator<Integer>() {
        @Override
        public int compare(Integer t1, Integer t2) {
            if(t2 > t1){
                return 1;
            } else {
                return -1;
            }
        }
    });

    private PriorityQueue small = new PriorityQueue<Integer>(new Comparator<Integer>() {
        @Override
        public int compare(Integer t1, Integer t2) {
            if(t1 > t2){
                return 1;
            } else {
                return -1;
            }
        }
    });

    public void push(int num){
        if(big.size() > 0 && num <= (int)big.peek()){
            big.offer(num);
        } else if(small.size() > 0 && num >= (int)small.peek()){
            small.offer(num);
        } else {
            big.offer(num);
        }
        balanced();
    }

    public void remove(int num){
        if(big.contains(num)){
            big.remove(num);
        } else {
            small.remove(num);
        }
        balanced();
    }

    public double getMid(){
        if(big.size() > small.size()){
            return (int) big.peek();
        } else if(big.size() < small.size()){
            return (int) small.peek();
        } else {
            return (Double.valueOf((int)big.peek()) + Double.valueOf((int)small.peek())) / 2;
        }
    }

    private void balanced(){
        while (Math.abs(big.size() - small.size()) > 1){
            if(big.size() > small.size()){
                int num = (int) big.poll();
                small.offer(num);
            } else {
                int num = (int) small.poll();
                big.offer(num);
            }
        }
    }
}

public class Solution {
    public double[] medianSlidingWindow(int[] nums, int k) {
        MidPriorityQueue midPriorityQueue = new MidPriorityQueue();

        //载入初始
        for(int i = 0; i < k - 1; i++){
            midPriorityQueue.push(nums[i]);
        }

        double[] results = new double[nums.length - k + 1];
        for(int i = k - 1; i < nums.length; i++){
            midPriorityQueue.push(nums[i]);
            if(i >= k){ //去除之前的
                midPriorityQueue.remove(nums[i - k]);
            }
            results[i - k + 1] = midPriorityQueue.getMid();
        }

        return results;
    }

    public static void main(String[] args) {
        new Solution().medianSlidingWindow(new int[]{1,2,3,4}, 4);
    }
}
// @lc code=end

