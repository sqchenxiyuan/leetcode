/*
 * @lc app=leetcode.cn id=587 lang=java
 *
 * [587] 安装栅栏
 */

// @lc code=start
import java.util.*;

public class Solution {

    public int[][] outerTrees(int[][] points) {
        //从下往上排序
        Arrays.sort(points, new Comparator<int[]>() {
            @Override
            public int compare(int[] p1, int[] p2) {
                return p1[0] == p2[0] ? p1[1] - p2[1] : p1[0] - p2[0]; //从左到右，从下到上
            }
        });
        Stack<int[]> stack = new Stack<>();
        for(int i = 0; i < points.length; i++){
            while (stack.size() >= 2 && orientation(stack.get(stack.size() - 2), stack.get(stack.size() - 1), points[i]) < 0){
                stack.pop();
            }
            stack.push(points[i]);
        }
        for(int i = points.length - 1; i >= 0; i--){
            while (stack.size() >= 2 && orientation(stack.get(stack.size() - 2), stack.get(stack.size() - 1), points[i]) < 0){
                stack.pop();
            }
            stack.push(points[i]);
        }

        ArrayList<int[]> arr = new ArrayList<>(new HashSet<>(stack));

        int[][] res = new int[arr.size()][2];
        for(int i = 0; i < arr.size(); i++){
            res[i] = arr.get(i);
        }
        return res;
    }

    //ab x ac  向量积 = |ab| x |ac| x sin
    public int orientation(int[] a, int[] b, int[] c) {
        return (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    }
}
// @lc code=end

