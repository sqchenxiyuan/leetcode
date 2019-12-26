/*
 * @lc app=leetcode id=421 lang=java
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
import java.util.HashSet;
import java.util.Set;

public class Solution {
    public int findMaximumXOR(int[] nums) {
        // a ^ b = max <==> a ^ max = b
        int res = 0;
        int mask = 0;
        for(int i = 31; i >= 0; i--){
            int guess = res | 1 << i; //猜测
            mask = mask | 1 << i;

            Set<Integer> set = new HashSet<>();
            for(int num : nums){
                set.add(num & mask);
            }
            for(int pre : set){
                if(set.contains(pre ^ guess)){
                    res = guess;
                    break;
                }
            }
        }

        return res;
    }
}
// @lc code=end

