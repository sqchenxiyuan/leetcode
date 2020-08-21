class Solution {
    public int[] searchRange(int[] nums, int target) {
        int start = -1, end = -1;

        int left = 0;
        int right = nums.length - 1;
        while(left <= right){
            int mid = (left + right) / 2;
            if(nums[mid] == target){
                if(mid == 0 || nums[mid - 1] < nums[mid]){
                    start = mid;
                    break;
                } else {
                    right = mid - 1;
                }
            } else if(nums[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        left = 0;
        right = nums.length - 1;
        while(left <= right){
            int mid = (left + right) / 2;
            if(nums[mid] == target){
                if(mid == nums.length - 1 || nums[mid] < nums[mid + 1]){
                    end = mid;
                    break;
                } else {
                    left = mid + 1;
                }
            } else if(nums[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return new int[]{start, end};
    }
}