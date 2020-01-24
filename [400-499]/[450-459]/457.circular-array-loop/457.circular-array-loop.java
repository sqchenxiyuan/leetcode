/*
 * @lc app=leetcode id=457 lang=java
 *
 * [457] Circular Array Loop
 */

// @lc code=start
public class Solution {
    public boolean circularArrayLoop(int[] nums) {
        int n = nums.length;
        for(int i = 0; i < n; i++){
            if(nums[i] == 0) continue;

            int p = i;
            int q = nextIndex(i, nums);
            //只能单向  全部加 或者 全部减
            while (nums[q] * nums[i] > 0 && nums[nextIndex(q, nums)] * nums[i] > 0){
                if(p == q){
                    if(p == nextIndex(p, nums)){
                        break;
                    }
                    return true;
                }
                p = nextIndex(p, nums);
                q = nextIndex(nextIndex(q, nums), nums);
            }

            //经过的设置为0，因为构不成循环
            p = i;
            while (nums[p] * nums[i] > 0) {
                int next = nextIndex(p, nums);
                nums[p] = 0;
                p = next;
            }
        }

        return false;
    }

    private int nextIndex(int i, int[] nums){
        int n = nums.length;
        int res = (i + nums[i]) % n;
        return res < 0 ? res + n : res;
    }
}
// @lc code=end

