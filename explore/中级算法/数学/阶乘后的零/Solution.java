import java.util.*;

class Solution {
    public int trailingZeroes(int n) {
        //被5整除就有一个0
        int x = 5;
        int count = 0;
        while(x <= n){
            count += n / x;
            if(Integer.MAX_VALUE / 5 < x) break;
            x = x * 5;
        }
        return count;
    }
}