package fun.chenxiyuan.leetcode.week.p3;

import java.util.*;

class Solution {
    public boolean canJump(int[] nums) {
        int pre = nums.length - 1;
        for(int i = nums.length - 2; i >= 0; i--){
            if(nums[i] + i >= pre){
                pre = i;
            }
        }
        return pre == 0;
    }
}