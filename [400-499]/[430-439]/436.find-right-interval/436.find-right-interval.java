/*
 * @lc app=leetcode id=436 lang=java
 *
 * [436] Find Right Interval
 */

// @lc code=start
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public int[] findRightInterval(int[][] intervals) {
        int n = intervals.length;
        List<int[]> startArr = new ArrayList<>();
        List<int[]> endArr = new ArrayList<>();
        for(int i = 0; i < intervals.length; i++){
            int[] x = new int[]{intervals[i][0], intervals[i][1], i};
            startArr.add(x);
            endArr.add(x);
        }

        // 根据start Point排序
        startArr.sort(new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0] - o2[0];
            }
        });

        // 根据end Point排序
        endArr.sort(new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[1] - o2[1];
            }
        });

        int[] result = new int[intervals.length];
        Arrays.fill(result, -1);
        int startIndex = 0;
        int endIndex = 0;
        while (startIndex < n && endIndex < n){
            int[] startInterval = startArr.get(startIndex);
            int[] endInterval = endArr.get(endIndex);

            if(startInterval[0] >= endInterval[1]){
                result[endInterval[2]] = startInterval[2];
                endIndex++;
            } else {
                startIndex++;
            }
        }

        return result;
    }
}
// @lc code=end

