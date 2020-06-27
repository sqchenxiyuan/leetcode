import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int longestSubarray(int[] nums) {
        List<Integer> arr = new ArrayList<>();

        int pre = nums[0];
        int preCount = 1;
        for(int i = 1; i < nums.length; i++){
            int num = nums[i];
            if(num == pre){
                preCount++;
            } else {
                if(pre == 0){
                    arr.add(-preCount);
                } else {
                    arr.add(preCount);
                }
                pre = num;
                preCount = 1;
            }
        }
        if(pre == 0){
            arr.add(-preCount);
        } else {
            arr.add(preCount);
        }

        int max = 0;
        for(int i = 0; i < arr.size(); i++){
            int count = arr.get(i);
            if(count > 0){
                max = Math.max(max, count - 1);
            } else {
                if(count == -1){
                    int sum = 0;
                    if(i > 0) sum += arr.get(i - 1);
                    if(i < arr.size() - 1) sum += arr.get(i + 1);
                    max = Math.max(max, sum);
                } else {
                    if(i > 0) max = Math.max(max, arr.get(i - 1));
                    if(i < arr.size() - 1) max = Math.max(max, arr.get(i + 1));
                }
            }
        }
        return max;
    }

    public static void main(String[] args) {
        new Solution().longestSubarray(new int[]{1,0,0,0});
    }
}
