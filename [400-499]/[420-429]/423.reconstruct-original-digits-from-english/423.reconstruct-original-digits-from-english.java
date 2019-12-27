/*
 * @lc app=leetcode id=423 lang=java
 *
 * [423] Reconstruct Original Digits from English
 */

// @lc code=start
public class Solution {

    public String originalDigits(String s) {
//        "zero", // z
//        "one", // o - 0 - 2 - 4
//        "tow", //w
//        "three", // r - 0 - 4
//        "four", // u
//        "five", // f - 4
//        "six", // x
//        "seven", //s - 6
//        "eight", //g
//        "nine" // i - 6 - 5 - 8

        int[] countArr = new int['z' + 1];
        for(char c : s.toCharArray()){
            countArr[c]++;
        }
        int[] nums = new int[10];

        nums[0] = countArr['z'];
        nums[2] = countArr['w'];
        nums[4] = countArr['u'];
        nums[6] = countArr['x'];
        nums[8] = countArr['g'];
        nums[1] = countArr['o'] - nums[0] - nums[2] - nums[4];
        nums[3] = countArr['h'] - nums[8];
        nums[5] = countArr['f'] - nums[4];
        nums[7] = countArr['s'] - nums[6];
        nums[9] = countArr['i'] - nums[5] - nums[6] - nums[8];

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < 10; i++){
            int count = nums[i];
            while (count > 0){
                sb.append(i);
                count--;
            }
        }
        return sb.toString();
    }
}
// @lc code=end

