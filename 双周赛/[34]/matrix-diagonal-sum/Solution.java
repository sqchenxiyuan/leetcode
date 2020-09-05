class Solution {
    public int diagonalSum(int[][] mat) {
        int n = mat.length;
        if(n == 0) return 0;
        int sum = 0;
        for(int i = 0; i < n; i++){
            int x = i;
            int y = n - 1 - i;
            sum += mat[i][x];
            if(x != y) sum+=mat[i][y];
        }
        return sum;
    }
}
