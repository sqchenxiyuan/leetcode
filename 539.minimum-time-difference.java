/*
 * @lc app=leetcode id=539 lang=java
 *
 * [539] Minimum Time Difference
 */

// @lc code=start
import java.util.Arrays;
        import java.util.List;
        import java.util.regex.Matcher;
        import java.util.regex.Pattern;

public class Solution {
    private static Pattern p = Pattern.compile("(\\d+):(\\d+)");

    public int findMinDifference(List<String> timePoints) {
        int n = timePoints.size();
        int[] times = new int[n];
        for(int i = 0; i < n; i++){
            times[i] = parse(timePoints.get(i));
        }
        Arrays.sort(times);
        int min = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++){
            if(min == 0) break;
            int diff = Math.abs(times[i] - times[(i + 1) % n]);
            min = Math.min(min, Math.min(diff, 24 * 60 - diff));
        }
        return min;
    }

    private int parse(String str){
        Matcher m = p.matcher(str);
        if(m.matches()){
            return Integer.valueOf(m.group(1)) * 60 + Integer.valueOf(m.group(2));
        }
        return 0;
    }
}
// @lc code=end

