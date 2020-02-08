/*
 * @lc app=leetcode id=475 lang=java
 *
 * [475] Heaters
 */

// @lc code=start
import java.util.Arrays;

public class Solution {
    //找离得最近的
    public int findRadius(int[] houses, int[] heaters) {
        Arrays.sort(heaters);
        int minRadius = 0;
        for(int housePosition : houses){
            int i = 0, j = heaters.length - 1;
            while (i + 1 < j){
                int mid = (i + j) / 2;
                if(heaters[mid] == housePosition) {
                    i = mid;
                    break;
                }
                else if(heaters[mid] < housePosition){
                    i = mid;
                } else {
                    j = mid;
                }
            }
            minRadius = Math.max(minRadius, Math.min(Math.abs(heaters[i] - housePosition), Math.abs(heaters[j] - housePosition)));
        }
        return minRadius;
    }

    public static void main(String[] args) {
        new Solution().findRadius(new int[]{1,2,3}, new int[]{1,2,3});
    }
}
// @lc code=end

