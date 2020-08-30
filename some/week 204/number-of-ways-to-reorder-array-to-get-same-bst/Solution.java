
import java.util.*;

class Solution {
    
    long base = (long)(1e9 + 7);
    long[][] C = new long[1001][1001];
    public int numOfWays(int[] nums) {
        int n = nums.length;
        C[0][0] = 1;
        C[0][1] = 1;
        C[1][1] = 1;
        for(int i = 2; i <= n; i++){
            for(int j = 0; j <= i; j++){
                if(j == 0 || j == i) C[j][i] = 1;
                else C[j][i] = (C[j][i - 1] + C[j - 1][i - 1]) % base;
            }
        }
        return (int)help(nums) - 1;
    }

    public long help(int[] nums) {
        int head = nums[0];
        int count = 0;
        for(int num : nums){
            if(num < head) count++;
        }
        int[] mins = new int[count];
        int[] maxs = new int[nums.length - 1 - count];
        int i = 0;
        int j = 0;
        for(int num : nums){
            if(num == head) continue;
            if(num < head){
                mins[i++] = num;
            } else {
                maxs[j++] = num;
            }
        }

        long a = mins.length <= 1 ? 1 : help(mins);
        long b = maxs.length <= 1 ? 1 : help(maxs);
        long res = (a * b) % base;
        res = (res * C[count][nums.length - 1]) % base;
        return res;
    }

    public static void main(String[] args) {
        new Solution().numOfWays(new int[] {1});
    }
}

