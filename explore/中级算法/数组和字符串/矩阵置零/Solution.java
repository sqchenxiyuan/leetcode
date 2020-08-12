class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length;
        if(m == 0) return;
        int n = matrix[0].length;
        if(n == 0) return;

        boolean col0 = false;
        boolean raw0 = false;

        //先处理边
        for(int i = 0; i < m; i++){
            if(matrix[i][0] == 0){
                col0 = true;
                break;
            }
        }

        for(int i = 0; i < n; i++){
            if(matrix[0][i] == 0){
                raw0 = true;
                break;
            }
        }

        for(int i = 1; i < m; i++){
            for(int j = 1; j < n; j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for(int i = 1; i < m; i++){
            for(int j = 1; j < n; j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
        }

        if(col0){
            for(int i = 0; i < m; i++){
                matrix[i][0] = 0;
            }
        }

        if(raw0){
            for(int i = 0; i < n; i++){
                matrix[0][i] = 0;
            }
        }
    }
}