class Solution {
    public int mySqrt(int x) {
        if(x <= 1) return x;
        double cur = x;
        while(true){
            double next = (x + cur * cur) / (2 * cur);
            if(Math.abs(next - cur) < 0.00001) return (int)next;
            cur = next;
        }
    }
}