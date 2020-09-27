class Solution {
    public void wiggleSort(int[] nums) {
        //先找到中间数
        findKSort(nums, 0, nums.length - 1, nums.length / 2);

        //中间数居中，使用3-way-partition
        int left = 0;
        int midPre = 0;
        int right = nums.length - 1;
        int mid = nums[nums.length  / 2];
        int n = nums.length;
        while(left <= right){
            if(nums[mapping(left, n)] > mid){
                swap(nums, mapping(left, n), mapping(midPre, n));
                left++;
                midPre++;
            } else if(nums[mapping(left, n)] < mid){
                swap(nums, mapping(left, n), mapping(right, n));
                right--;
            } else {
                left++;
            }
        }
    }

    public int mapping(int i, int n){
        return (1 + 2 * i) % (n | 1);
    }

    public void findKSort(int[] nums, int r1, int r2, int k){
        int left = r1;
        int right = r2;
        int num = nums[r1];
        while(left < right){
            while(left < right && num < nums[right]){
                right--;
            }
            if(left == right) break;
            nums[left] = nums[right];
            left++;
            while(left < right && nums[left] <= num){
                left++;
            }
            if(left == right) break;
            nums[right] = nums[left];
            right--;
        }
        nums[left] = num;
        if(left == k) return;
        else if(left < k){
            findKSort(nums, left + 1, r2, k);
        } else {
            findKSort(nums, r1, left - 1, k);
        }
    }

    public void swap(int[] nums, int a, int b){
        int t = nums[a];
        nums[a] = nums[b];
        nums[b] = t;
    }
}