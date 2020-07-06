public class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        if(n == 0) return;
        int m = matrix[0].length;
        if(m == 0) return;

        help(0, n - 1, 0, m - 1, matrix);
    }

    private void help(int top, int bottom, int left, int right, int[][] matrix){
        if(top >= bottom || left >= right) return;
        for(int i = 0; i < right - left; i++){
            int tmp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = tmp;
        }
        help(++top, --bottom, ++left, --right, matrix);
    }
}