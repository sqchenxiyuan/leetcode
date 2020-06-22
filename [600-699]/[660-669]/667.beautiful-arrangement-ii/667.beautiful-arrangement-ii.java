/*
 * @lc app=leetcode.cn id=667 lang=java
 *
 * [667] 优美的排列 II
 */

// @lc code=start
public class Solution {
    public int[] constructArray(int n, int k) {
        int[] arr = new int[n];
        if(k == 1){
            for(int i = 1; i <= n; i++){
                arr[i - 1] = i;
            }
        } else if(k == n - 1){
            for(int i = 1; i <= n; i++){
                if(i % 2 == 1){
                    arr[i - 1] = (i + 1) / 2;
                } else {
                    arr[i - 1] = n - (i + 1) / 2 + 1;
                }
            }
        } else {
            int[] pre = constructArray(n - k - 1, 1);
            int[] last = constructArray(k + 1, k);
            int i = 0;
            for(int x = 0; x < pre.length; x++, i++){
                arr[i] = pre[x];
            }
            int base = n - k - 1;
            for(int x = 0; x < last.length; x++, i++){
                arr[i] = last[x] + base;
            }
        }

        return arr;
    }
}

