import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> simplifiedFractions(int n) {
        List<String> res = new ArrayList<>();
        for(int i = 2; i <= n; i++){
            for(int j = 1; j < i; j++){
                if(gcd(j, i) == 1){
                    res.add(j + "/" + i);
                }
            }
        }
        return res;
    }

    private int gcd(int a, int b){
        while (b != 0){
            int x = a % b;
            a = b;
            b = x;
        }
        return a;
    }
}
