/*
 * @lc app=leetcode id=552 lang=java
 *
 * [552] Student Attendance Record II
 */

// @lc code=start

public class Solution {
    private int base = 1000000007;

    public int checkRecord(int n) {
        int size = Math.max(3, n + 1);
        int[] dpOfP = new int[size]; //A为结尾的
        int[] dpOfWithoutA = new int[size]; //没有A的情况
        dpOfP[0] = 0;
        dpOfWithoutA[0] = 1;//空字符
        dpOfP[1] = 1; //"P"
        dpOfWithoutA[1] = 2;//"P" "L"
        dpOfP[2] = 2; //"PP" "LP"
        dpOfWithoutA[2] = 4;//"PL" "LL" "PP" "LP"
        for(int i = 3; i <= n; i++){
            dpOfP[i] = dpOfWithoutA[i - 1];
            dpOfWithoutA[i] = ((dpOfP[i] + dpOfP[i - 1]) % base + dpOfP[i - 2]) % base; //"xxxP" "xxPL" "xPLL"
        }
        int withA = dpOfWithoutA[n];
        for(int i = 0; i < n; i++){
            withA = Long.valueOf((Long.valueOf(dpOfWithoutA[i]) * Long.valueOf(dpOfWithoutA[n - i - 1]) + Long.valueOf(withA) ) %  base).intValue();
        }
        return withA;
    }
}
// @lc code=end

