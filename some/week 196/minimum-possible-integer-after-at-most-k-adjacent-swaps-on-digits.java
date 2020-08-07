import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public String minInteger(String num, int k) {
        return help(num, k);
    }

    private String help(String str, int k){
        if(k == 0) return str;
        if(str.length() == 0) return str;
        char[] chars = str.toCharArray();
        List<Integer>[] map = new List[10];
        for(int i = 0; i <= 9; i++){
            map[i] = new ArrayList<>();
        }

        for(int i = 0; i < chars.length && i <= k; i++){
            map[chars[i] - '0'].add(i);
        }

        int x = 0;
        while (map[x].size() == 0) x++;

        //向前提取
        List<Integer> nmap = map[x];
        char minC = (char)(x + '0');

        if(nmap.get(0) == 0){
            int i = 0;
            while (i < nmap.size() && nmap.get(i) == i) i++;
            return str.substring(0, 1) + help(str.substring(1), k);
        }


        int preI = -1;
        String pre = "";
        String back = "";
        int targetI = 0;
        for(int i : nmap){
            if(k - i + targetI >= 0){
                k = k - i + targetI;
                targetI++;
                pre += minC;
                if(preI < i){
                    back += str.substring(preI + 1, i);
                }
                preI = i;
            } else {
                break;
            }
        }
        back += str.substring(preI + 1);


        return pre + help(back, k);
    }

    public static void main(String[] args) {
        new Solution().help("9000900", 23);
    }

}
