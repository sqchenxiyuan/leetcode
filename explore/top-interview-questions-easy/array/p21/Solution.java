public class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) return 0;
        int l = 1;
        int pre = nums[0];
        for(int i = 1; i < nums.length; i++){
            if(nums[i] == pre) continue;
            nums[l] = nums[i];
            pre = nums[i];
            l++;
        }
        return l;
    }
}
