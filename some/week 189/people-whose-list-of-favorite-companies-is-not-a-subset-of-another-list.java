import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public List<Integer> peopleIndexes(List<List<String>> favoriteCompanies) {
        Set<String>[] sets = new Set[favoriteCompanies.size()];
        for(int i = 0; i < sets.length; i++){
            Set<String> set = new HashSet<>();
            List<String> favorites = favoriteCompanies.get(i);
            for(String fav : favorites){
                set.add(fav);
            }
            sets[i] = set;
        }
        List<Integer> res = new ArrayList<>();
        loop1: for(int i = 0; i < sets.length; i++){
            Set<String> seti = sets[i];
            loop2: for(int j = 0; j < sets.length; j++){
                if(i == j) continue;
                Set<String> setj = sets[j];
                for(String str : seti){
                    if(!setj.contains(str)){
                        continue loop2;
                    }
                }
                continue loop1;
            }
            res.add(i);
        }
        return res;
    }
}
