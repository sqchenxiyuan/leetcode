public class Solution {
    public int countTriplets(int[] arr) {
        int l = arr.length;
        int[] dp = new int[l + 1];
        dp[0] = 0;
        for(int i = 0; i < l; i++){
            dp[i + 1] = dp[i] ^ arr[i];
        }
        int count = 0;
        for(int i = 0; i <= l; i++){
            for(int j = i + 2; j <= l; j++){
                if((dp[i] ^ dp[j]) == 0){
                    count += j - i - 1;
                }
            }
        }

        return count;
    }

    public static void main(String[] args) {
        new Solution().countTriplets(new int[]{1,1,1,1,1});
    }
}