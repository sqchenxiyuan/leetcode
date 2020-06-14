
public class Solution {
    public int[] runningSum(int[] nums) {
        int[] res = new int[nums.length];
        for(int i = 0; i < res.length; i++) {
            if(i == 0) res[0] = nums[0];
            else res[i] = res[i - 1] + nums[i];
        }

        return res;
    }
}
