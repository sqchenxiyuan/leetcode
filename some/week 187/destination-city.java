import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public String destCity(List<List<String>> paths) {
        Set<String> noOut = new HashSet<>(); //没有出度
        Set<String> haveOut = new HashSet<>(); //有出度

        for(List<String> path : paths){
            String from = path.get(0);
            String to = path.get(1);

            noOut.remove(from);
            haveOut.add(from);
            if(!haveOut.contains(to)){
                noOut.add(to);
            }
        }

        return (String)noOut.toArray()[0];
    }
}
