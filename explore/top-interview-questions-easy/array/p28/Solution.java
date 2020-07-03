public class Solution {
    public void moveZeroes(int[] nums) {
        int pre = 0;
        for(int num : nums){
            if(num != 0){
                nums[pre] = num;
                pre++;
            }
        }
        for(;pre < nums.length; pre++){
            nums[pre] = 0;
        }
    }
}
