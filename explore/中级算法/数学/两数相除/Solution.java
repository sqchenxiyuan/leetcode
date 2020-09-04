import java.util.*;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public int divide(int dividend, int divisor) {
        long end = dividend;
        long base = divisor;
        boolean fu = false;
        if(end < 0 && base < 0){
            end = -end;
            base = -base;
        } else if(end < 0){
            end = -end;
            fu = true;
        } else if(base < 0){
            base = -base;
            fu = true;
        }

        List<Long> arr = new ArrayList<>();
        int i = 0;
        long b = base;
        while(end >= b) {
            i++;
            arr.add(b);
            b += b;
        }

        long res = 0;
        for(i--; i >= 0; i--){
            long curB = arr.get(i);
            if(end >= curB){
                res += ((long)1) << i;
                end -= curB;
            }
        }
        
        if(fu){
            res = -res;
        }

        if(res<Integer.MIN_VALUE || res > Integer.MAX_VALUE) return Integer.MAX_VALUE;
        return (int)res;
    }
}