import java.util.*;

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();

        while(n != 1){
            if(set.contains(n)) return false;
            set.add(n);
            int next = 0;
            while(n > 0){
                int d = n % 10;
                next += d*d;
                n /= 10;
            }
            n = next;
        }

        return true;
    }
}