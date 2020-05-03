public class Solution {
    public boolean kLengthApart(int[] nums, int k) {
        int pre = -1;//之前的坐标
        int min = -1;
        for(int i = 0; i < nums.length; i++){
            int num = nums[i];
            if(num == 1){
                if(pre != -1){
                    if(min == -1){
                        min = i - pre - 1;
                    } else {
                        min = Math.min(min, i - pre - 1);
                    }
                }
                pre = i;
            }
        }
        if(min == -1) return true;
        return min >= k;
    }
}
