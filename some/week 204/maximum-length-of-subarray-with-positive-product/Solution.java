import java.util.*;

class Solution {
    public int getMaxLen(int[] nums) {
        int n = nums.length;
        int[] longZ = new int[n + 1];
        int[] longF = new int[n + 1];
        int max = 0;
        for(int i = 0; i < n; i++){
            if(nums[i] == 0){
                longZ[i + 1] = 0;
                longF[i + 1] = 0;
            } else if(nums[i] > 0){
                longZ[i + 1] = longZ[i] + 1;
                longF[i + 1] = longF[i] == 0 ? 0 : (longF[i] + 1);
            } else {
                longZ[i + 1] = longF[i] == 0 ? 0 : (longF[i] + 1);
                longF[i + 1] = longZ[i] + 1;
            }
            max = Math.max(max, longZ[i + 1]);
        }
        return max;
    }
}
