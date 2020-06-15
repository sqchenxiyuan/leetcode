/*
 * @lc app=leetcode.cn id=658 lang=java
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int len = arr.length;
        int left = 0;
        int right = len - 1;
        while (left < right){
            int mid = (left + right) / 2;
            if(arr[mid] < x){
                left = mid + 1;
            } else if(arr[mid] > x){
                right = mid - 1;
            } else {
                left = mid;
                break;
            }
        }

        int z = left;
        if(arr[z] != x){
            if(left > 0 && Math.abs(x - arr[left - 1]) <= Math.abs(x - arr[z])){
                z = left - 1;
            }
            if(left < len - 1 && Math.abs(x - arr[left + 1]) < Math.abs(x - arr[z])){
                z = left + 1;
            }
        }

        left = z - 1;
        right = z + 1;
        k--;
        while ((left >= 0 || right < len) && k > 0){
            if(left >= 0 && right < len){
                if(Math.abs(x - arr[left]) <= Math.abs(x - arr[right])){
                    left--;
                } else {
                    right++;
                }
            } else if(left >= 0){
                left--;
            } else if(right < len){
                right++;
            }
            k--;
        }
        List<Integer> res = new ArrayList<>();
        for(int i = left + 1; i < right; i++){
            res.add(arr[i]);
        }

        return res;
    }

    public static void main(String[] args) {
        new Solution().findClosestElements(new int[]{1,3}, 1,2);
    }
}
// @lc code=end

