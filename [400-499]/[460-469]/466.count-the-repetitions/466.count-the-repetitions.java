/*
 * @lc app=leetcode id=466 lang=java
 *
 * [466] Count The Repetitions
 */

// @lc code=start
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public int getMaxRepetitions(String s1, int n1, String s2, int n2) {
        //首先计算多少个

        List<Integer> repeatCount = new ArrayList<>(); //s2在第i段已匹配数目
        List<Integer> nextIdx = new ArrayList<>(); //s2在第i匹配后的下一个匹配点
        Map<Integer, Integer> map = new HashMap<>();
        int p = 0, count = 0;
        for(int i = 1; i <= n1; i++){
            for(int j = 0; j < s1.length(); j++){
                if(s1.charAt(j) == s2.charAt(p)){
                    p++;
                    if(p == s2.length()){
                        p = 0;
                        count++;
                    }
                }
            }

            repeatCount.add(count);
            nextIdx.add(p);

            //找到了循环点
            if(map.containsKey(p)){
                int preIndex = map.get(p); //preIndex之后到i这一段
                int s1n = i - preIndex; //消耗的s1的数目
                int s2n = count - repeatCount.get(preIndex - 1);

                int preCount = repeatCount.get(preIndex - 1); //前端
                int midCount = (n1 - preIndex) / s1n * s2n; //中间重复端
                int lastCount =  repeatCount.get((n1 - preIndex) % s1n + preIndex - 1) - repeatCount.get(preIndex - 1); //最后结束端
                return (preCount + midCount + lastCount) / n2;
            } else {
                map.put(p, i);
            }
        }
        return count / n2;
    }

    public static void main(String[] args) {
        new Solution().getMaxRepetitions("baba",
                11,
                "baab",
                1
        );
    }
}
// @lc code=end

