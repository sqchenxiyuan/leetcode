import java.util.*;

class Solution {
    public boolean containsPattern(int[] arr, int m, int k) {
        int n = arr.length;
        loop1: for(int i = 0; i + m * k - 1 < n; i++){
            for(int j = 0; j < k; j++){
                int base = i + j * m;
                for(int x = 0; x < m; x++){
                    if(arr[base + x] != arr[i + x]) continue loop1;
                }
            }
            return true;
        }
        return false;
    }
}
