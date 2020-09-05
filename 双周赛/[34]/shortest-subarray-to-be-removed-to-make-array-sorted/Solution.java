import java.util.*;

class Solution {
    private int base = (int)1e9 + 7;

    public int countRoutes(int[] locations, int start, int finish, int fuel) {
        Map<String, Integer> cache = new HashMap<>();
        return help(locations, start, finish, fuel, cache);
    }

    private int help(int[] locations, int start, int finish, int fuel, Map<String, Integer> cache){
        String key = start + "|" + finish + "|" + fuel;
        if(cache.containsKey(key)) return cache.get(key);
        int n = locations.length;
        int res = 0;
        if(start == finish) res++;

        for(int i = 0; i < n; i++){
            if(i == start) continue;
            int d = (int)Math.abs(locations[start] - locations[i]);
            if(d <= fuel){
                res = (res + help(locations, i, finish, fuel - d, cache)) % base;
            }
        }

        cache.put(key, res);
        return res;
    }
}
