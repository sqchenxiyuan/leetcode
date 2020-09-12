class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] res = new int[nums.length];

        int multiRes = 1;
        for(int i = 0; i < nums.length; i++){
            res[i] = multiRes;
            multiRes *= nums[i];
        }

        multiRes = 1;
        for(int i = nums.length - 1; i >= 0; i--){
            res[i] = multiRes * res[i];
            multiRes *= nums[i];
        }

        return res;
    }
}