/*
 * @lc app=leetcode id=517 lang=java
 *
 * [517] Super Washing Machines
 */

// @lc code=start
public class Solution {
    public int findMinMoves(int[] machines) {
        //最简单的即 与平均数的差值的最大值
        //但是对于连续的 比如  -4 -4，那么就需要8步 才能填满，而不是4步
        int sum = 0;
        int len = machines.length;
        for(int num : machines){
            sum += num;
        }
        if(sum % len != 0) return -1;
        int avg = sum / len;

        int[] arr = new int[len];
        for(int i = 0; i < len; i++){
            arr[i] = machines[i] - avg;
        }

        int max = 0;
        int xsum = 0;
        for(int i = 0; i < len; i++){
            xsum += arr[i];
            max = Math.max(Math.abs(xsum), Math.max(arr[i], max));
        }
        return max;
    }
}
// @lc code=end

