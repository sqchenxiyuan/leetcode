class Solution {
    public List<List<Integer>> permute(int[] nums) {
        return help(0, nums.length - 1, nums);
    }

    private List<List<Integer>> help(int left, int right, int[] nums){
        List<List<Integer>> res = new ArrayList<>();
        if(left > right) {}
        else if(left == right){
            res.add(Arrays.asList(nums[left]));
        } else {
            List<List<Integer>> pre = help(left + 1, right, nums);
            for(List<Integer> preArr : pre){
                int l = preArr.size();
                for(int i = 0; i <= l; i++){
                    List<Integer> newArr = new ArrayList<>(preArr);
                    newArr.add(i, nums[left]);
                    res.add(newArr);
                }
            }
        }
        return res;
    }
}