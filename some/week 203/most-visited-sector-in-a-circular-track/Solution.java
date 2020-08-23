import java.util.*;

class Solution {
    public List<Integer> mostVisited(int n, int[] rounds) {
        int start = rounds[0];
        int end = rounds[rounds.length - 1];
        List<Integer> res = new ArrayList<>();
        while(true){
            res.add(start);
            if(start == end) break;
            start = start % n + 1;
        }
        res.sort((a, b) -> a - b);
        return res;
    }
}