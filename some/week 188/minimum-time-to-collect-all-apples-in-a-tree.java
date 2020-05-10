import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Node{
    int id;
    boolean hasApple;
    List<Node> children = new ArrayList<>();
}


public class Solution {


    public int minTime(int n, int[][] edges, List<Boolean> hasApple) {
        Map<Integer, Node> nodes = new HashMap<>();

        for(int i = 0;  i < n; i++){
            Node node = new Node();
            node.id = i;
            node.hasApple = hasApple.get(i);

            nodes.put(i, node);
        }

        for(int[] e : edges){
            int from = Math.min(e[0], e[1]);
            int to = Math.max(e[0], e[1]);
            nodes.get(from).children.add(nodes.get(to));
        }

        return getMinTime(nodes.get(0));
    }

    private int getMinTime(Node node){
        if(node == null) return 0;
        int count = 0;
        for(Node c : node.children){
            count += getMinTime(c);
        }
        if((node.hasApple || count > 0) && node.id != 0){
            count += 2;
        }
        return count;
    }
}
