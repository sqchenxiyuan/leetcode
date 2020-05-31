import java.util.*;

public class Solution {
    public int minReorder(int n, int[][] connections) {
        List<int[]>[] sides = new List[n];
        for(int i = 0; i < n; i++){
            sides[i] = new ArrayList();
        }

        boolean[][] map = new boolean[n][n];
        for(int[] c :connections){
            sides[c[0]].add(new int[]{c[1], 1});
            sides[c[1]].add(new int[]{c[0], 0});
        }

        Queue<Integer> queue = new ArrayDeque<>();
        boolean[] viewed = new boolean[n];
        queue.add(0);
        viewed[0] = true;
        int count = 0;
        while (queue.size() > 0){
            int i = queue.poll();
            List<int[]> side = sides[i];
            for(int[] s: side){
                if(viewed[s[0]]) continue;
                queue.add(s[0]);
                count += s[1];
                viewed[s[0]] = true;
            }
        }

        return count;
    }
}
