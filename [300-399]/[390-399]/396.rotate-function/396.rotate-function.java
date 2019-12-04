public class Solution {
    public int maxRotateFunction(int[] A) {
        
        int sum = 0;
        int f = 0;
        int n = A.length;
        for(int i = 0; i < n; i++) {
            sum += A[i];
            f += i * A[i];
        }
        
        int max = f;
        //f(i+1) = f(i) + sum - n*A[n - i]
        for(int i = 1; i < n; i++) {
            int nextf = f + sum - n * A[n - i];
            max = Math.max(nextf, max);
            f = nextf;
        }
        
        return max;
    }
}