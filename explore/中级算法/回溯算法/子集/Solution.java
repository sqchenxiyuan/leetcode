class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        return helper(0, nums);
    }

    private List<List<Integer>> helper(int left, int[] nums){
        if(left >= nums.length) {
            List<List<Integer>> res = new ArrayList<>();
            res.add(new ArrayList<>());
            return res;
        }
        List<List<Integer>> res = helper(left + 1, nums);
        int l = res.size();
        for(int i = 0; i < l; i++){
            List<Integer> newArr = new ArrayList<>(res.get(i));
            newArr.add(nums[left]);
            res.add(newArr);
        }
        return res;
    }
}