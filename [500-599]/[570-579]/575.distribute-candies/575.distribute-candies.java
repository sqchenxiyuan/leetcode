/*
 * @lc app=leetcode.cn id=575 lang=java
 *
 * [575] 分糖果
 */

// @lc code=start

import java.util.Arrays;

public class Solution {
    public int distributeCandies(int[] candies) {
        //先把每个种类第一个给妹妹,后续都给哥哥
        //如果哥哥多，那么妹妹获取了最全的种类
        //如果妹妹多，妹妹需要给哥哥一些单独的种类
        Arrays.sort(candies);
        int sister = 1;
        int l = candies.length;
        int pre = candies[0];
        for(int i = 1; i < candies.length; i++){
            if(pre != candies[i - 1]){
                sister++;
                pre = candies[i - 1];
            }
        }
        return Math.min(sister, l / 2);
    }
}
// @lc code=end

