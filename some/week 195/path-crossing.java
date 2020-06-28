import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Solution {
    public boolean isPathCrossing(String path) {
        char[] chars = path.toCharArray();
        Map<Integer, Set<Integer>> map = new HashMap<>();
        
        int x = 0;
        int y = 0;
        map.put(x, new HashSet<>());
        map.get(x).add(y);

        for(char c : chars){
            switch (c){
                case 'N': y++; break;
                case 'S': y--; break;
                case 'E': x++; break;
                case 'W': x--; break;
            }
            if(!map.containsKey(x)){
                map.put(x, new HashSet<>());
            }
            if(map.get(x).contains(y)) return true;
            map.get(x).add(y);
        }

        return false;
    }
}