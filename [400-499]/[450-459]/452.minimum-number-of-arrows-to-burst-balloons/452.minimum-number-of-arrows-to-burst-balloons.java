/*
 * @lc app=leetcode id=452 lang=java
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public int findMinArrowShots(int[][] points) {
        if(points.length == 0) return 0;
        List<int[]> arr = Arrays.asList(points);

        arr.sort(new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[1] - o2[1];
            }
        });

        int arrowPoint = arr.get(0)[1];
        int arrowCount = 1;
        for(int[] balloon : arr){
            if(balloon[0] <= arrowPoint){
                continue;
            }
            arrowCount++;
            arrowPoint = balloon[1];
        }
        return arrowCount;
    }
}
// @lc code=end

