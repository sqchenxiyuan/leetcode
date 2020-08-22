import java.util.*;

class Solution {
    public List<Integer> findSmallestSetOfVertices(int n, List<List<Integer>> edges) {
        Set<Integer> set = new HashSet<>();
        for(int i = 0; i < n; i++){
            set.add(i);
        }
        for(List<Integer> e : edges){
            set.remove(e.get(1));
        }
        return new ArrayList<>(set);
    }
}