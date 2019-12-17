/*
 * @lc app=leetcode id=410 lang=java
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
public class Solution {
//    public int splitArray(int[] nums, int m) {
//        int len = nums.length;
//        int[] S = new int[len + 1];//S[i]表示[0-i)的和
//
//        S[0] = 0;
//        for(int i = 0; i < len; i++){
//            S[i + 1] = S[i] + nums[i];
//        }
//
//        int[] dp = new int[len]; //dp[i] 表示[i-len)当前范围分组数的最小最大值
//        for(int i = 0; i < len; i++){
//            dp[i] = S[len] - S[i];
//        }
//
//        for(int i = 1; i < m; i++){
//            for(int j = 0; j < len - i; j++){
//                dp[j] = Integer.MAX_VALUE;
//                for(int x = j + 1; x <= len - i; x++){
//                    int sum = Math.max(dp[x], S[x] - S[j]);
//                    if(sum <= dp[j]){
//                        dp[j] = sum;
//                    } else {
//                        break;
//                    }
//                }
//            }
//        }
//
//        return dp[0];
//    }

    public int splitArray(int[] nums, int m) {
        int max = 0;
        int sum = 0;
        for(int num : nums){
            max = Math.max(num, max);
            sum += num;
        }

        int left = max;
        int right = sum;
        while (left <= right){
            int mid = (right - left) / 2 + left;
            if(checkBigValue(nums, m, mid)){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    //检测这个最大值能否正确分割成个 超过这个最大值就分割  false 表示值太小（分割数量太多）
    private boolean checkBigValue(int[] nums, int m, int maxValue){
        int count = 1;
        int currentNum = nums[0];
        for(int i = 1; i < nums.length; i++){
            int num = nums[i];
            if(currentNum + num > maxValue){
                currentNum = num;
                count++;
            } else {
                currentNum += num;
            }
        }

        return count <= m;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().splitArray(new int[]{7,2,5,10,8}, 2));
        System.out.println(new Solution().splitArray(new int[]{7,2,5,10,8}, 3));
        System.out.println(new Solution().splitArray(new int[]{1,2147483646}, 2));
    }
}
// @lc code=end

