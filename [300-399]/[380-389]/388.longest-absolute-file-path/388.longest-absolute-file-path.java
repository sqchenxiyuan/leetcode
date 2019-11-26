/*
 * @lc app=leetcode id=388 lang=java
 *
 * [388] Longest Absolute File Path
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public int lengthLongestPath(String input) {
        int maxLength = 0;
        Map<Integer, Integer> map = new HashMap<>();

        String[] lines = input.split("\n");
        for(String line : lines){
            int curLevel = line.lastIndexOf("\t") + 1;
            map.put(curLevel, (curLevel > 0 ? map.get(curLevel - 1) : 0) + line.length() - curLevel + 1);
            if(line.contains(".")) maxLength = Math.max(maxLength, map.get(curLevel) - 1);
        }

        return  maxLength;
    }
}

class Main{

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"));
        System.out.println(solution.lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));
        System.out.println(solution.lengthLongestPath("a"));
    }
}
// @lc code=end

