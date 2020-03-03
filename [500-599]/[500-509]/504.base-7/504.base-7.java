/*
 * @lc app=leetcode id=504 lang=java
 *
 * [504] Base 7
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public String convertToBase7(int num) {
        StringBuilder sb = new StringBuilder();
        if(num < 0){
            num = -num;
            sb.append('-');
        }
        List<Character> arr = new ArrayList<>();
        if(num == 0){
            arr.add('0');
        }

        while (num > 0){
            arr.add((char)(num % 7 + '0'));
            num = num / 7;
        }

        for(int i = arr.size() - 1; i >= 0; i--){
            sb.append(arr.get(i));
        }

        return sb.toString();
    }
}
// @lc code=end

