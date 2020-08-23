
import java.util.*;

class Solution {
    public int stoneGameV(int[] stoneValue) {
        int n = stoneValue.length;
        int[][] cache = new int[n][n];
        return help(stoneValue, 0, n - 1, cache);
    }

    private int help(int[] stoneValue, int start, int end, int[][] cache){
        if(start == end) return 0;
        if(cache[start][end] > 0) return cache[start][end];

        int sum = 0;
        for(int i = start; i<=end; i++){
            sum += stoneValue[i];
        }

        int res = 0;
        int leftValue = 0;
        int rightValue = sum;
        for(int i = start; i < end; i++){
            leftValue += stoneValue[i];
            rightValue -= stoneValue[i];
            
            if(leftValue == rightValue){
                res = Math.max(res, leftValue + Math.max(help(stoneValue, start, i, cache), help(stoneValue, i + 1, end, cache)));
            } else if(leftValue < rightValue){
                res = Math.max(res, leftValue + help(stoneValue, start, i, cache));
            } else {
                res = Math.max(res, rightValue + help(stoneValue, i + 1, end, cache));
            }
        }

        cache[start][end] = res;
        return res;
    }

    public static void main(String[] args) {
        new Solution().stoneGameV(new int[]{6,2,3,4,5,5});
    }
}