public class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] arr = new int[nums.length];
        for(int i = 0; i < n; i++){
            arr[i * 2] = nums[i];
            arr[i * 2 + 1] = nums[i + n];
        }
        return arr;
    }
}
