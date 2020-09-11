import java.util.*;

class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] arr = new int[26];
        for(char c : tasks){
            arr[c - 'A']++;
        }
        Arrays.sort(arr);
        int res = (arr[25] - 1) * (n + 1) + 1;
        for(int i = arr.length - 2; i >= 0; i--){
            if(arr[i] == arr[i + 1]){
                res++;
            } else {
                break;
            }
        }
        return Math.max(res, tasks.length);
    }

    public static void main(String[] args) {
        new Solution().leastInterval(new char[]{'A','A','A','B','B','B'}, 2);
    }
}