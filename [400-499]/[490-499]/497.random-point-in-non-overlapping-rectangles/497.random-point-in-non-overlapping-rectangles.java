/*
 * @lc app=leetcode id=497 lang=java
 *
 * [497] Random Point in Non-overlapping Rectangles
 */

// @lc code=start
import java.util.Random;

public class Solution {
    private int[][] rects;
    private long[] rectSizes;
    private long sumSize = 0;
    private Random random = new Random();

    public Solution(int[][] _rects) {
        rects = _rects;
        rectSizes = new long[rects.length];

        for(int i = 0; i < rects.length; i++){
            int[] rect = rects[i];
            rectSizes[i] = (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
            sumSize += rectSizes[i];
        }
    }

    public int[] pick() {
        return pickInRect(pickRect());
    }

    private int[] pickRect(){
        //可以使用二分进行优化
        long r = (long)(Math.random() * sumSize); //[0 - sumSize)
        for(int i = 0; i < rectSizes.length; i++){
            if(r < rectSizes[i]) return rects[i];
            r -= rectSizes[i];
        }
        return rects[0];
    }

    private int[] pickInRect(int[] rect){
        int x1 = rect[0];
        int y1 = rect[1];
        int x2 = rect[2];
        int y2 = rect[3];

        int width = x2 - x1;
        int height = y2 - y1;

        int rx = random.nextInt(width + 1);
        int ry = random.nextInt(height + 1);

        return new int[]{x1 + rx, y1 + ry};
    }
}
/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(rects);
 * int[] param_1 = obj.pick();
 */
// @lc code=end

