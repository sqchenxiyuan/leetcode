/*
 * @lc app=leetcode id=417 lang=java
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
import java.util.*;

class FlowTo{
    public boolean toPacific = false;
    public boolean toAtlantic = false;

    public void merge(FlowTo flowTo){
        if(!toPacific){
            toPacific = flowTo.toPacific;
        }

        if(!toAtlantic){
            toAtlantic = flowTo.toAtlantic;
        }
    }

    public boolean isOk(){
        return toPacific && toAtlantic;
    }
}

class Position{
    public int x;
    public int y;
    public int h;
    public FlowTo flowTo;

    Position(int x, int y, int h){
        this.x = x;
        this.y = y;
        this.h = h;
        this.flowTo = null;
    }
}

public class Solution {
    private static int[][] dirctions = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};

    public List<List<Integer>> pacificAtlantic(int[][] matrix) {
        List<List<Integer>> result = new ArrayList<>();
        int m = matrix.length;
        if(m == 0) return result;
        int n = matrix[0].length;
        if(n == 0) return result;

        Position[][] map = new Position[m][n];
        List<Position> arr = new ArrayList<>();
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                Position p = new Position(i, j, matrix[i][j]);
                map[i][j] = p;
                arr.add(p);
            }
        }

        arr.sort(new Comparator<Position>() {
            @Override
            public int compare(Position o1, Position o2) {
                return o1.h - o2.h;
            }
        });

        for(Position p : arr){
            if(p.flowTo == null){
                Set<Position> set = new HashSet<>();
                FlowTo flowTo = getPositonFlowTo(map, set, p);
                for(Position viewP : set){
                    if(viewP.flowTo == null) p.flowTo = flowTo;
                }
            }

            FlowTo flowTo = p.flowTo;
            if(flowTo.isOk()){
                List<Integer> x = new ArrayList<Integer>();
                x.add(p.x);
                x.add(p.y);
                result.add(x);
            }
        }

        return result;
    }

    FlowTo getPositonFlowTo(Position[][] map, Set<Position> viewedPostions, Position currentPosition){
        if(currentPosition.flowTo != null) return currentPosition.flowTo;
        int m = map.length;
        int n = map[0].length;

        int x = currentPosition.x;
        int y = currentPosition.y;
        int h = currentPosition.h;

        viewedPostions.add(currentPosition);
        FlowTo flowTo = new FlowTo();
        for(int[] d : dirctions){
            int nx = x + d[0];
            int ny = y + d[1];
            if(nx < 0 || ny < 0){
                flowTo.toPacific = true;
            } else if(nx >= m || ny >= n){
                flowTo.toAtlantic = true;
            } else if(!viewedPostions.contains(map[nx][ny]) && h >= map[nx][ny].h){
                FlowTo flowTo2 = getPositonFlowTo(map, viewedPostions, map[nx][ny]);
                flowTo.merge(flowTo2);
            }

            if(flowTo.isOk()) break;
        }

        return flowTo;
    }

}
// @lc code=end

