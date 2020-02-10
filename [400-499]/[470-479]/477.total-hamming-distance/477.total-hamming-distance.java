/*
 * @lc app=leetcode id=477 lang=java
 *
 * [477] Total Hamming Distance
 */

// @lc code=start
public class Solution {
    public int totalHammingDistance(int[] nums) {
        int l = nums.length;
        int[] bit0Counts = new int[32]; //这一位为0的数目

        //记录每一位的数目
        for(int num : nums){
            int count = 0;
            while (num > 0){
                if((num & 1) == 1) bit0Counts[count]++;
                num = num >> 1;
                count++;
            }
        }

        int result = 0;
        for(int num : bit0Counts){
            result += num * (l - num);
        }
        return result;
    }
}
// @lc code=end

