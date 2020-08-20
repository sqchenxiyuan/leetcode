class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        while(left < right){
            int mid = (left + right) / 2;
            if((mid == 0 || nums[mid] > nums[mid - 1]) && (mid == nums.length - 1 || nums[mid] > nums[mid + 1])){
                left = mid;
                break;
            } else if(mid > 0 && nums[mid] < nums[mid - 1]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}