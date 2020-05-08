/*
 * @lc app=leetcode.cn id=605 lang=java
 *
 * [605] 种花问题
 */

// @lc code=start
public class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        for(int i = 0; i < flowerbed.length; i++){
            if(n == 0) break;
            int pre = i == 0 ? 0 : flowerbed[i - 1];
            int next = i == flowerbed.length - 1 ? 0 : flowerbed[i +1];
            if(pre == 0 && next == 0 && flowerbed[i] == 0){
                n--;
                flowerbed[i] = 1;
            }
        }
        return n == 0;
    }
}
// @lc code=end

