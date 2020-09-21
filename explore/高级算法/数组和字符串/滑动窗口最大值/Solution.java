import java.util.*;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] left = new int[n];
        int[] right = new int[n];
        int[] res = new int[n - k + 1];

        for(int i = 0; i < n; i+=k){
            int leftMax = Integer.MIN_VALUE;
            for(int j = i; j < n; j++){
                leftMax = Math.max(leftMax, nums[j]);
                left[j] = leftMax;
            }
        }

        for(int i = 0; i < n; i+=k){
            int rightMax = Integer.MIN_VALUE;
            for(int j = Math.min(n - 1, i + k - 1); j >= i; j--){
                rightMax = Math.max(rightMax, nums[j]);
                right[j] = rightMax;
            }
        }

        for(int i = 0; i + k <= n; i++){
            res[i] = Math.max(left[i + k - 1], right[i]);
        }
        return res;
    }
}