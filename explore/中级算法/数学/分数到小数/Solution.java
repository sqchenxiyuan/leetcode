import java.util.*;

class Solution {
    public String fractionToDecimal(int numerator, int denominator) {
        boolean fu = numerator < 0 && denominator >= 0 || numerator >= 0 && denominator < 0;
        long a = Math.abs((long)numerator);
        long b = Math.abs((long)denominator);
        long pre = a / b;
        long cur = a % b;
        String res = String.valueOf(pre);
        List<Long> list = new ArrayList<>();
        if(pre == 0 && cur == 0) return "0";
        Map<Long, Integer> map = new HashMap<>();
        int loop = -1;
        int i = 0;
        while(cur > 0){
            if(map.containsKey(cur)){
                loop = map.get(cur);
                break;
            }
            map.put(cur, i++);
            cur *= 10;
            long x = cur / denominator;
            cur = cur % denominator;
            list.add(Math.abs(x));
        }

        StringBuilder sb = new StringBuilder();
        if(fu) sb.append('-');
        sb.append(res);
        for(int j = 0; j < list.size(); j++){
            if(j == 0) sb.append('.');
            if(loop == j) sb.append('(');
            sb.append(list.get(j));
        }
        if(loop >= 0) sb.append(')');
        return sb.toString();
    }
}