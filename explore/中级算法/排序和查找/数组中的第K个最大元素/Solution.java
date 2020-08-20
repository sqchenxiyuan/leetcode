class Solution {
    public int findKthLargest(int[] nums, int k) {
        return helper(nums, 0, nums.length - 1, nums.length - k + 1);
    }

    private int helper(int[] nums, int start, int end, int k){
        int left = start;
        int right = end;
        int num = nums[left];
        while(left < right){
            while(left < right && nums[right] > num){
                right--;
            }
            nums[left] = nums[right];
            while(left < right && nums[left] <= num){
                left++;
            }
            nums[right] = nums[left];
        }
        nums[left] = num;
        if(k - 1 == left) return num;
        else if(k - 1 < left) return helper(nums, start, left - 1, k);
        else return helper(nums, left + 1, end, k);
    }
}