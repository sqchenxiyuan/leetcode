class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();

        for(int i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            int target = -nums[i];
            int left = i + 1;
            int right = nums.length - 1;

            for(; left < nums.length; left++){
                if(left > i + 1 && nums[left] == nums[left - 1]) continue;

                while(left < right && nums[left] + nums[right] > target){
                    right--;
                }

                if(left == right) break;
                if(nums[left] + nums[right] == target){
                    List<Integer> x = new ArrayList<>();
                    x.add(nums[i]);
                    x.add(nums[left]);
                    x.add(nums[right]);
                    res.add(x);
                }
            }
        }

        return res;
    }
}