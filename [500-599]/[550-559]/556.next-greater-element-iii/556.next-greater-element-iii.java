/*
 * @lc app=leetcode id=556 lang=java
 *
 * [556] Next Greater Element III
 */

// @lc code=start
public class Solution {
    public int nextGreaterElement(int n) {
        long num = Long.valueOf(n);
        int[] dCount = new int[10];
        int preNum = 0;
        while (num > 0){
            int d = Long.valueOf(num % 10).intValue();
            if(d < preNum){ //到达目标点
                //找到大于它的内容
                for(int i = d + 1; i < 10; i++){
                    if(dCount[i] > 0){
                        //找到比它大的
                        dCount[d]++;
                        dCount[i]--;

                        num = (num / 10) * 10 + i;
                        for(int j = 0; j < 10; j++){
                            while (dCount[j] > 0){
                                num = num * 10 + j;
                                dCount[j]--;
                            }
                        }
                        if(num <= Integer.MAX_VALUE){
                            return Long.valueOf(num).intValue();
                        } else {
                            return -1;
                        }
                    }
                }
            } else {
                dCount[d]++;
            }
            preNum = d;
            num = num / 10;
        }
        return -1;
    }
}
// @lc code=end

