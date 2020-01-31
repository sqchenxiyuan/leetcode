/*
 * @lc app=leetcode id=464 lang=java
 *
 * [464] Can I Win
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    //奇数次能达到100
    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {
        int sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
        if(sum < desiredTotal) return false;
        if(desiredTotal < maxChoosableInteger) return true;

        Map<Integer, Boolean> map = new HashMap<>();
        boolean[] used = new boolean[maxChoosableInteger + 1];
        return helper(desiredTotal, map, used);
    }

    private boolean helper(int targetTotal,Map<Integer, Boolean> map,boolean[] used){
        if(targetTotal <= 0) return false;
        int key = format(used);
        if(!map.containsKey(key)){
            for(int i = 1; i < used.length; i++){
                if(!used[i]){
                    used[i] = true;
                    if(!helper(targetTotal - i, map, used)){
                        map.put(key, true);
                        used[i] = false;
                        return true;
                    }
                    used[i] = false;
                }
            }
            map.put(key, false);
        }
        return map.get(key);
    }

    private int format(boolean[] used){
        int x = 0;
        for (boolean b : used){
            if(b) x = x | 1;
            x = x << 1;
        }
        return x;
    }
}
// @lc code=end

