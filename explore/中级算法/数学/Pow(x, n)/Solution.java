class Solution {
    public double myPow(double x, int n) {
        boolean isf = n < 0;
        double res = 1;
        if(isf) {
            x = 1 / x;
            if(n == Integer.MIN_VALUE){
                n++;
                res = x;
            }
            n = -n;
        }
        double base = x;
        while(n > 0){
            if((n & 1) == 1){
                res *= base;
            }
            base = base * base;
            n = n >>> 1;
        }
        return res;
    }
}