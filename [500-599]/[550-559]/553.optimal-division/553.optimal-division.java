/*
 * @lc app=leetcode id=553 lang=java
 *
 * [553] Optimal Division
 */

// @lc code=start
public class Solution {
    public String optimalDivision(int[] nums) {
        StringBuilder sb = new StringBuilder();
        if(nums.length == 0) return "";
        if(nums.length == 1) sb.append(nums[0]);
        else if(nums.length == 2){
            sb.append(nums[0]);
            sb.append('/');
            sb.append(nums[1]);
        } else {
            sb.append(nums[0]);
            sb.append('/');
            sb.append('(');
            for(int i = 1; i < nums.length; i++){
                if(i > 1){
                    sb.append('/');
                }
                sb.append(nums[i]);
            }
            sb.append(')');
        }
        return sb.toString();
    }
}
// @lc code=end

