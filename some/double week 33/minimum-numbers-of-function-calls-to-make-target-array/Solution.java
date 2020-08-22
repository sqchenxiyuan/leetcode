class Solution {
    public int minOperations(int[] nums) {
        int count = 0;
        while(true){
            int count0 = 0;
            for(int i = 0; i < nums.length; i++){
                if(nums[i] % 2 == 1){
                    nums[i]--;
                    count++;
                }
                if(nums[i] == 0){
                    count0++;
                }
            }
            if(count0 == nums.length) break;
            for(int i = 0; i < nums.length; i++){
                nums[i] /= 2;
            }
            count++;
        }
        return count;
    }
}