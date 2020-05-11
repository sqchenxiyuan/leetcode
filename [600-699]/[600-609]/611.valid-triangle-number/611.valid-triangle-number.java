/*
 * @lc app=leetcode.cn id=611 lang=java
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    public int triangleNumber(int[] nums) {
        Arrays.sort(nums);
        int l = nums.length;
        int count = 0;
        for(int i = 0; i < l - 2; i++){
            int j = i + 1;
            int k = i + 2;
            for(; j < l - 1; j++){
                if(k == j) k++;
                while (k < l && nums[i] + nums[j] > nums[k]) k++;
                count += (k - j - 1);
            }
        }

        return count;
    }
}
// @lc code=end

