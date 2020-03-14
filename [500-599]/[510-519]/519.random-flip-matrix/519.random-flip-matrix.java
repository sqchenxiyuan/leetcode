/*
 * @lc app=leetcode id=519 lang=java
 *
 * [519] Random Flip Matrix
 */

// @lc code=start
import java.util.*;

public class Solution {
    private Map<Integer, Integer> map;
    private int rows;
    private int cols;
    private int total;
    private Random random;

    public Solution(int n_rows, int n_cols) {
        rows = n_rows;
        cols = n_cols;
        total = rows * cols;
        map = new HashMap<>();
        random = new Random();
    }

    public int[] flip() {
        //选择一个，然后将total位置的值放到这里来
        int r = random.nextInt(total--);
        int x = map.getOrDefault(r, r);
        map.put(r, map.getOrDefault(total, total));
        return new int[]{x / cols, x % cols};
    }

    public void reset() {
        total = rows * cols;
        map = new HashMap<>();
    }
}
/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(n_rows, n_cols);
 * int[] param_1 = obj.flip();
 * obj.reset();
 */
// @lc code=end

