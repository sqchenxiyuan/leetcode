/*
 * @lc app=leetcode id=432 lang=java
 *
 * [432] All O`one Data Structure
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

class AllOne {
    Map<String, Integer> map = new HashMap<>();

    /** Initialize your data structure here. */
    public AllOne() {
    }

    /** Inserts a new key <Key> with value 1. Or increments an existing key by 1. */
    public void inc(String key) {
        if(map.containsKey(key)){
            map.put(key, map.get(key) + 1);
        } else {
            map.put(key, 1);
        }

    }

    /** Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. */
    public void dec(String key) {
        if(!map.containsKey(key)) return;
        int nextValue = map.get(key) - 1;
        if(nextValue == 0) map.remove(key);
        else map.put(key, nextValue);
    }

    /** Returns one of the keys with maximal value. */
    public String getMaxKey() {
        if(map.size() == 0) return "";
        int max = Integer.MIN_VALUE;
        String maxKey = "";
        for(String key : map.keySet()){
            if(map.get(key) > max){
                maxKey = key;
                max = map.get(key);
            }
        }
        return maxKey;
    }

    /** Returns one of the keys with Minimal value. */
    public String getMinKey() {
        if(map.size() == 0) return "";
        int min = Integer.MAX_VALUE;
        String minKey = "";
        for(String key : map.keySet()){
            if(map.get(key) < min){
                minKey = key;
                min = map.get(key);
            }
        }
        return minKey;
    }
}
/**
 * Your AllOne object will be instantiated and called as such:
 * AllOne obj = new AllOne();
 * obj.inc(key);
 * obj.dec(key);
 * String param_3 = obj.getMaxKey();
 * String param_4 = obj.getMinKey();
 */
// @lc code=end

