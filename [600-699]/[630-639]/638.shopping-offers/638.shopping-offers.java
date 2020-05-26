/*
 * @lc app=leetcode.cn id=638 lang=java
 *
 * [638] 大礼包
 */

// @lc code=start
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public int shoppingOffers(List<Integer> price, List<List<Integer>> special, List<Integer> needs) {
        return shopping(price, special,  needs, new HashMap<>());
    }

    private int shopping(List<Integer> price, List<List<Integer>> special, List<Integer> needs, Map<String, Integer> cache){
        String key = getKey(needs);
        if(needs.stream().allMatch(a -> a <= 0)) return 0;
        if(cache.containsKey(key)) return cache.get(key);

        int min = buyAll(price, needs);
        
        for(int i = 0; i < special.size(); i++){
            List<Integer> pack = special.get(i);

            boolean ok = true;
            for(int j = 0; j < price.size(); j++){
                if(needs.get(j) - pack.get(j) < 0){
                    ok = false;
                    break;
                }
            }
            if(!ok) continue;


            for(int j = 0; j < price.size(); j++){
                needs.set(j, needs.get(j) - pack.get(j));
            }

            int p = shopping(price, special, needs, cache) + pack.get(price.size());
            min = Math.min(p, min);

            for(int j = 0; j < price.size(); j++){
                needs.set(j, needs.get(j) + pack.get(j));
            }
        }

        cache.put(key, min);
        return min;
    }

    private String getKey(List<Integer> needs){
        StringBuilder sb = new StringBuilder();
        for(int i : needs){
            sb.append(i);
            sb.append(',');
        }
        return sb.toString();
    }

    private int buyAll(List<Integer> needs, List<Integer> price){
        int sum = 0;
        for(int i = 0; i < needs.size(); i++){
            sum += needs.get(i) * price.get(i);
        }
        return sum;
    }
}
// @lc code=end

