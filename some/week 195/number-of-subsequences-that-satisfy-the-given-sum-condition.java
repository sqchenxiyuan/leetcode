import java.util.Arrays;

public class Solution {
    static private int base = (int)1e9 + 7;

    public int numSubseq(int[] nums, int target) {
        Arrays.sort(nums);

        int[] cache = new int[nums.length];

        cache[0] = 1;
        for(int i = 1; i < cache.length; i++){
            cache[i] = (cache[i - 1] * 2) % base;
        }

        int res = 0;
        int left = 0;
        int right = nums.length - 1;
        while (left < nums.length && left <= right){
            while (left <= right && nums[left] + nums[right] > target){
                right--;
            }

            if(left > right) break;

            res = (res + cache[right - left]) % base;

            left++;
        }
        return res;
    }

    public static void main(String[] args) {
        new Solution().numSubseq(new int[]{6}, 12);
    }
}