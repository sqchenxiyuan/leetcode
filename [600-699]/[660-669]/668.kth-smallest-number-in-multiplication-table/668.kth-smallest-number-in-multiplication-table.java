/*
 * @lc app=leetcode.cn id=668 lang=java
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
public class Solution {
    private int smallOrEqual(int m, int n, int target){
        int count = 0;
        for(int i = 1; i <= m; i++){
            count += Math.min(target / i, n);
        }
        return count;
    }

    public int findKthNumber(int m, int n, int k) {
        int left = 1;
        int right = m * n;
        while (left < right){
            int mid = (left + right) / 2;
            int c = smallOrEqual(m,n,mid);
            if(c < k){
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return right;
    }
}
// @lc code=end

