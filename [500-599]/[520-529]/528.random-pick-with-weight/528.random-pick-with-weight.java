/*
 * @lc app=leetcode id=528 lang=java
 *
 * [528] Random Pick with Weight
 */

// @lc code=start
import java.util.Random;

public class Solution {
    int sum;
    int[] w;
    int[] ps;
    Random random;

    public Solution(int[] _w) {
        sum = 0;
        w = _w;
        random = new Random();
        ps = new int[w.length];
        for(int i = 0; i < w.length; i++){
            sum += w[i];
            ps[i] = sum;
        }

    }

    public int pickIndex() {
        int r = random.nextInt(sum) + 1;
        int i = 0;
        //可以二分
        while (ps[i] < r) i++;
        return i;
    }
}
/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(w);
 * int param_1 = obj.pickIndex();
 */
// @lc code=end

