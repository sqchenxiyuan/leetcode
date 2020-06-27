import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int kthFactor(int n, int k) {
        List<Integer> bases = new ArrayList<>();

        for(int i = 1; i * i <= n; i++){
            if(n % i == 0){
                bases.add(i);
                k--;
                if(k == 0) return i;
            }
        }

        int lastI = bases.get(bases.size() - 1);
        if(lastI * lastI == n){
            k++; //多走一步
        }
        if(k > bases.size()) return -1;

        return n / bases.get(bases.size() - k);
    }
}
