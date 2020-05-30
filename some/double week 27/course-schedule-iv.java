import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public List<Boolean> checkIfPrerequisite(int n, int[][] prerequisites, int[][] queries) {
        int[][] map = new int[n][n];

        for(int[] pre : prerequisites){
            map[pre[0]][pre[1]] = 1;
        }

        List<Boolean> res = new ArrayList<>();
        for(int[] q : queries){
            res.add(help(map, q[0], q[1]));
        }

        return res;
    }

    private boolean help(int[][] map, int from, int to){
        if(map[from][to] != 0){
            return map[from][to] == 1 ? true : false;
        }

        int res = -1;
        for(int i = 0; i < map.length; i++){
            if(map[from][i] == 1){
                if(help(map, i, to)){
                    res = 1;
                    break;
                }
            }
        }
        map[from][to] = res;
        return map[from][to] == 1 ? true : false;
    }
}