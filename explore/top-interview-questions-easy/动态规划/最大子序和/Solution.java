class Solution {
    public int maxSubArray(int[] nums) {
        int[] dp = new int[nums.length]; //结尾为i的连续数组的最大值
        dp[0] = nums[0];
        int max = dp[0];
        for(int i = 1; i < nums.length; i++){
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            max = Math.max(dp[i], max);
        }
        return max;
    }
}