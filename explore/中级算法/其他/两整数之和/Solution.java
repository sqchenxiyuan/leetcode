import java.util.*;

class Solution {
    public int getSum(int a, int b) {
        while(b != 0){
            int na = a ^ b;
            int nb = a & b;
            a = na;
            b = nb << 1;
        }
        return a;
    }
}