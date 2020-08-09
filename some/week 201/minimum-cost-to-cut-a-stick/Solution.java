import java.util.*;

public class Solution {
    Map<String, Integer> map = new HashMap<>();

    public int minCost(int n, int[] cuts) {
        Arrays.sort(cuts);
        return help(0, n, 0, cuts.length - 1, cuts);
    }

    public int help(int left, int right, int leftCut, int rightCut, int[] cuts){
        if(leftCut > rightCut) return 0;
        if(leftCut == rightCut) return right - left;
        String key = left + "|" + right;
        if(map.containsKey(key)) return map.get(key);
        int n = Integer.MAX_VALUE;
        for(int i = leftCut; i<= rightCut; i++){
            n = Math.min(n, help(left, cuts[i], leftCut, i - 1, cuts) + help(cuts[i], right, i + 1, rightCut, cuts));
        }
        n = n + right - left;
        map.put(key, n);
        return n;
    }
}