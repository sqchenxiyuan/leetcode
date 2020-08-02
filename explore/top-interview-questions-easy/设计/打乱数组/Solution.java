class Solution {

    int[] nums;
    Random r;

    public Solution(int[] nums) {
        this.nums = nums;
        r = new Random();
    }
    
    /** Resets the array to its original configuration and return it. */
    public int[] reset() {
        return Arrays.copyOf(nums, nums.length);
    }
    
    /** Returns a random shuffling of the array. */
    public int[] shuffle() {
        int[] rnums = Arrays.copyOf(nums, nums.length);
        for(int i = rnums.length - 1 ; i >= 0; i--){
            int j = r.nextInt(i + 1);
            int tmp = rnums[j];
            rnums[j] = rnums[i];
            rnums[i] = tmp;
        }
        return rnums;
    }
}