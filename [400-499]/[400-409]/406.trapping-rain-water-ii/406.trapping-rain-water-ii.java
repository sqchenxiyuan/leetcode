import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

class Postion{
    public int x;
    public int y;
    public int h;
    public Postion(int x, int y, int h) {
        this.x = x;
        this.y = y;
        this.h = h;
    }
}

public class Solution {
    private static int[][] dirctions = new int[][] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    public int trapRainWater(int[][] heightMap) {
        int m = heightMap.length;
        if(m <= 2) return 0;
        int n = heightMap[0].length;
        if(n <= 2) return 0;
        
        boolean[][] viewedMap = new boolean[m][n];
        for(int i = 0; i < m; i++) {
            Arrays.fill(viewedMap[i], false);
        }
        
        Comparator<Postion> cmp = new Comparator<Postion>() {
            
            @Override
            public int compare(Postion a, Postion b) { //这里是小根堆
                return a.h - b.h;
            }
        };
        Queue<Postion> queue = new PriorityQueue<>(cmp);
        
        for(int i = 0; i < m; i++) {
            queue.add(new Postion(i, 0, heightMap[i][0]));
            queue.add(new Postion(i, n - 1, heightMap[i][n - 1]));
            viewedMap[i][0] = true;
            viewedMap[i][n - 1] = true;
        }
        
        for(int i = 1; i < n - 1; i++) {
            queue.add(new Postion(0, i, heightMap[0][i]));
            queue.add(new Postion(m - 1, i, heightMap[m - 1][i]));
            viewedMap[0][i] = true;
            viewedMap[m - 1][i] = true;
        }
        
        int sum = 0;
        while (queue.size() > 0) {
            Postion postion = queue.poll();
            int x = postion.x;
            int y = postion.y;
            int h = postion.h;
            
            for(int[] dirction : dirctions) {
                int nx = x + dirction[0];
                int ny = y + dirction[1];
                
                if(nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if(viewedMap[nx][ny]) continue;
                int max = Math.max(h, heightMap[nx][ny]);
                System.out.println(h + "|" + heightMap[nx][ny] + "|" + (max - heightMap[nx][ny]));
                sum += max - heightMap[nx][ny];
                
                viewedMap[nx][ny] = true;
                queue.add(new Postion(nx, ny, max));
            }
        }
        
        return sum;
    }
    
    public static void main(String[] args) {
        new Solution().trapRainWater(new int[][] {
            {1,4,3,1,3,2},
            {3,2,1,3,2,4},
            {2,3,3,2,3,1}
        });
    }
}