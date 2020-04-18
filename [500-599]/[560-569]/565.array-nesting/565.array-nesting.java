/*
 * @lc app=leetcode id=565 lang=java
 *
 * [565] Array Nesting
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int arrayNesting(int[] nums) {
        int[] cache = new int[nums.length];//缓存节点出发到结束的长度
        int max = 0;

        for(int i = 0; i < nums.length; i++){
            if(cache[i] > 0) continue;

            Map<Integer, Integer> map = new HashMap<>(); //当前每个节点
            int num = i;
            int count = 0;
            while (num < nums.length && num >= 0 && !map.containsKey(num)){
                if(cache[num] > 0){//走到了一个入口
                    count += cache[num];
                    break;
                }
                map.put(num, count);
                count++;
                num = nums[num];
            }
            int start = map.getOrDefault(num, Integer.MAX_VALUE);//没有就无环
            for(int key : map.keySet()){
                cache[key] = count - Math.min(map.get(key), start);
            }

            max = Math.max(max, count);
        }

        return max;
    }
}
// @lc code=end

