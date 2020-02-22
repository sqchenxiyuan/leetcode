/*
 * @lc app=leetcode id=493 lang=java
 *
 * [493] Reverse Pairs
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    public int reversePairs(int[] nums) {
        return mergeSortHelper(nums, 0, nums.length - 1);
    }

    private int mergeSortHelper(int[] nums, int start, int end){
        if(start >= end) return 0;
        int mid = start + (end - start) / 2;
        int count = mergeSortHelper(nums, start, mid) + mergeSortHelper(nums, mid + 1, end);

        for(int i = start, j = mid + 1; i <= mid; i++){
            while (j <= end && nums[i] / 2.0 > nums[j]) j++;
            count += (j - mid - 1);
        }

        Arrays.sort(nums, start, end + 1);
        return count;
    }
}

// @lc code=end

