import java.util.ArrayList;
import java.util.List;

class Solution {
    public int findLengthOfShortestSubarray(int[] arr) {
        int n = arr.length;
        int up = 0;
        while(up < arr.length - 1 && arr[up] <= arr[up + 1])up++;
        if(up == arr.length - 1) return 0;
        int down = arr.length - 1;
        while(down > 0 && arr[down] >= arr[down - 1]) down--;

        int min = arr.length - 1;

        min = Math.min(min, Math.min(n - up - 1, down));

        int left = up;
        int right = arr.length - 1;
        while(left >= -1 && right >= down){
            int x = left == -1 ? Integer.MIN_VALUE : arr[left];
            int y = arr[right];
            if(y >= x){
                min = Math.min(min, right - left - 1);
                right--;
            } else {
                left--;
            }
        }
        return min;
    }

    public static void main(String[] args) {
        new Solution().findLengthOfShortestSubarray(new int[]{1,2,3,10,4,2,3,5});
    }
}
