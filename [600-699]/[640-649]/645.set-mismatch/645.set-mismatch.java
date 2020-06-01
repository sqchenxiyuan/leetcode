/*
 * @lc app=leetcode.cn id=645 lang=java
 *
 * [645] 错误的集合
 */

// @lc code=start
public class Solution {
    public int[] findErrorNums(int[] nums) {
        int xor = 0;
        int n = nums.length;
        for(int num : nums){
            xor = xor ^ num;
        }
        for(int i = 1; i <= n; i++){
            xor = xor ^ i;
        }
        //xor = x ^ y x为多于 y为缺失
        int r = 1;
        while ((xor & r) == 0) r = r << 1;
        int x = 0;
        int y = 0;
        for(int num : nums){
            if((num & r) == 0){
                x = x ^ num;
            } else {
                y = y ^ num;
            }
        }
        for(int i = 1; i <= n; i++){
            if((i & r) == 0){
                x = x ^ i;
            } else {
                y = y ^ i;
            }
        }

        for(int num : nums){
            if(num == x) {
                return new int[]{x, y};
            }
        }

        return new int[]{y, x};
    }
}
// @lc code=end

