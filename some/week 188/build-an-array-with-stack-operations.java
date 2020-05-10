import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> buildArray(int[] target, int n) {
        int x = 0; //当前要生成的target
        List<String> res = new ArrayList<>();
        for(int i = 1; i <= n && x < target.length;i++){
            res.add("Push");
            if(target[x] == i){
                x++;
            } else {
                res.add("Pop");
            }
        }
        return res;
    }
}
