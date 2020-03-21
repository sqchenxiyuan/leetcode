/*
 * @lc app=leetcode id=526 lang=java
 *
 * [526] Beautiful Arrangement
 */

// @lc code=start
public class Solution {
    public int countArrangement(int N) {
        boolean[] viewed = new boolean[N + 1];
        return help(1, N, viewed);
    }

    private int help(int pos, int N, boolean[] viewed){
        if(pos > N) return 1;
        int sum = 0;
        for(int i = 1; i <= N; i++){
            if(viewed[i]) continue;

            if(pos % i == 0 || i % pos == 0){
                viewed[i] = true;
                sum += help(pos + 1, N, viewed);
                viewed[i] = false;
            }
        }
        return sum;
    }
}
// @lc code=end

