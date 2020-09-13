import java.util.*;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        int m = matrix.length;
        if(m == 0) return res;
        int n = matrix[0].length;
        if(n == 0) return res;

        int top = 0;
        int bottom = m - 1;
        int left = 0;
        int right = n - 1;
        while(top <= bottom && left <= right){
            for(int i = left; i <= right; i++){
                res.add(matrix[top][i]);
            }
            for(int i = top + 1; i <= bottom - 1; i++){
                res.add(matrix[i][right]);
            }
            if(bottom > top){
                for(int i = right; i >= left; i--){
                    res.add(matrix[bottom][i]);
                }
            }
            if(right > left){
                for(int i = bottom - 1; i >= top + 1; i--){
                    res.add(matrix[i][left]);
                }
            }
            top++;
            bottom--;
            left++;
            right--;
        }
        return res;
    }
}