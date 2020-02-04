/*
 * @lc app=leetcode id=470 lang=java
 *
 * [470] Implement Rand10() Using Rand7()
 */

// @lc code=start
/**
 * The rand7() API is already defined in the parent class SolBase.
 * public int rand7();
 * @return a random integer in the range 1 to 7
 */
class Solution extends SolBase {
    //需要每个数出现概率相同
    //用小的构建大随机
    public int rand10() {
        int num = 40;
        while (num >= 40) num = 7 * (rand7() - 1) + (rand7() - 1); //0-48  取0-39
        return num % 10 + 1;
    }
}
// @lc code=end

