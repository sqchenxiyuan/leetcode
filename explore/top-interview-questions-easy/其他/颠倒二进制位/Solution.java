public class Solution {
    public int reverseBits(int n) {
        int res = 0;
        int x = 32;
        while(x > 0){
            res = res << 1;
            res = (res | (n & 1));
            n = n >>> 1;
            x--;
        }
        return res;
    }
}