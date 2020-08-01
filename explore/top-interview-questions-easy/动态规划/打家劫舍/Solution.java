class Solution {
    public int rob(int[] nums) {
        if(nums.length == 0) return 0;
        int[] dp = new int[nums.length + 1]; //[0, i]会抢最后一个i最大
        int[] global = new int[nums.length + 1]; //[0, i]最大
        dp[0] = 0;
        global[0] = 0;

        dp[1] = nums[0];
        global[1] = nums[0];

        for(int i = 2; i <= nums.length; i++){
            dp[i] = nums[i - 1] + global[i - 2];
            global[i] = Math.max(dp[i], global[i - 1]);
        }

        return global[nums.length];
    }
}