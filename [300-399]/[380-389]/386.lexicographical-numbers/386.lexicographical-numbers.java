/*
 * @lc app=leetcode id=386 lang=java
 *
 * [386] Lexicographical Numbers
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<Integer> lexicalOrder(int n) {
        List<Integer> arr = new ArrayList<>();

        build(arr, 0, n);

        return arr;
    }

    void build(List<Integer> arr, int current, int limit){
        current *= 10;
        if(current > limit) return;
        for(int i = 0; i <= 9; i++){
            int now = current + i;
            if(now > 0 && now <= limit){
                arr.add(now);
                build(arr, now, limit);
            }
        }
    }
}
// @lc code=end

