class Solution {
    public boolean increasingTriplet(int[] nums) {
        int[] mins = new int[3];
        int count = 0;
        for(int num : nums){
            int n = 0;
            while(num > mins[n] && n < count) n++;
            mins[n] = num;
            if(n == count){
                count++;
                if(count == 3){
                    return true;
                }
            }
        }
        return false;
    }
}