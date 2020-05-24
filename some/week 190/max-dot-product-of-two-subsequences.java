public class Solution {
    public int maxDotProduct(int[] nums1, int[] nums2) {
        int[][] dp = new int[nums1.length + 1][nums2.length + 1]; //以i j 结尾的最大点积
        int[][] global = new int[nums1.length + 1][nums2.length + 1];
        //dp[i][j] = global[i - 1][j - 1] + numi * numj
        int max = Integer.MIN_VALUE;

        for(int i = 0; i < nums1.length; i++){
            dp[i][0] = 0;
            global[i][0] = 0;
        }

        for(int j = 0; j < nums2.length; j++){
            dp[0][j] = 0;
            global[0][j] = 0;
        }

        for(int i = 1; i <= nums1.length; i++){
            int numi = nums1[i - 1];
            for(int j = 1; j <= nums2.length; j++){
                int numj = nums2[j - 1];
                dp[i][j] = global[i - 1][j - 1] + numi * numj;
                global[i][j] = Math.max(dp[i][j], global[i - 1][j - 1]);
                global[i][j] = Math.max(global[i][j], Math.max(global[i - 1][j], global[i][j - 1]));
                max = Math.max(dp[i][j], max);
            }
        }

        return max;
    }

    public static void main(String[] args) {
        new Solution().maxDotProduct(new int[]{-3,-8,3,-10,1,3,9}, new int[]{9,2,3,7,-9,1,-8,5,-1,-1});
    }
}
