import java.util.*;

class Solution {
    public int findLatestStep(int[] arr, int m) {
        int n = arr.length;
        char[] chars = new char[n];
        Arrays.fill(chars, '0');
        int res = -1;
        Map<Integer, Integer> startRanges = new HashMap<>();
        Map<Integer, Integer> endRanges = new HashMap<>();
        int[] numMap = new int[n + 1];
        int i = 1;
        for(int x : arr){
            x--;
            if(chars[x] == '1') continue;
            chars[x] = '1';

            int start = x;
            int end = x;

            if(x > 0 && chars[x - 1] == '1'){
                start = endRanges.get(x - 1);
                numMap[x - start]--;
            }

            if(x < n - 1 && chars[x + 1] == '1'){
                end = startRanges.get(x + 1);
                numMap[end - x]--;
            }

            startRanges.put(start, end);
            endRanges.put(end, start);
            numMap[end - start + 1]++;

            if(numMap[m] > 0){
                res = i;
            }
            i++;
        }
        return res;
    }
}