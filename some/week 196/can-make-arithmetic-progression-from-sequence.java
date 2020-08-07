import java.util.Arrays;

public class Solution {
    public boolean canMakeArithmeticProgression(int[] arr) {
        if(arr.length <= 2) return true;
        Arrays.sort(arr);
        int pre = arr[1] - arr[0];
        for(int i = 2; i < arr.length; i++){
            if(arr[i] - arr[i - 1] != pre) return false;
        }
        return true;
    }
}
