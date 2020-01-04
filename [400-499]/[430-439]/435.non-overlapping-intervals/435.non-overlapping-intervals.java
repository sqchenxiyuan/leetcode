/*
 * @lc app=leetcode id=435 lang=java
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if(intervals.length <= 1) return 0;
        List<int[]> arr = Arrays.asList(intervals);


        /*
        [  ] (  )不想交 扩展end

        [ ( ) ] 在之前的内部  保留最小的end 两个都相交了必须删一个  肯定保留小值
        [ ( ] ) 部分相交
         */
        arr.sort(new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0] - o2[0];
            }
        });

        int count = 0;
        int preEnd = arr.get(0)[1];

        for(int i = 1; i < intervals.length; i++){
            int[] interval = arr.get(i);

            if(interval[0] >= preEnd){
                preEnd = interval[1];
            } else {
                count++;
                preEnd = Math.min(preEnd, interval[1]);
            }
        }
        return count;
    }
}
// @lc code=end

