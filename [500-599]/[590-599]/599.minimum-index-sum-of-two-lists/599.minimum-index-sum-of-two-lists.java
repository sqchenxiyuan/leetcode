/*
 * @lc app=leetcode.cn id=599 lang=java
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> map = new HashMap<>();

        for(int i = 0; i < list1.length; i++){
            map.put(list1[i], i);
        }

        int min = Integer.MAX_VALUE;
        Set<String> set = new HashSet<>();
        for(int i = 0; i < list2.length; i++){
            String str = list2[i];
            if(map.containsKey(str)){
                int count = map.get(str) + i;
                if(count < min) {
                    set = new HashSet<>();
                    min = count;
                    set.add(str);
                } else if(count == min) {
                    set.add(str);
                }
            }
        }
        return set.toArray(new String[set.size()]);
    }
}
// @lc code=end

