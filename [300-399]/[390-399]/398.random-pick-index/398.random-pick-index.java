class Solution {
    
    private Map<Integer, List<Integer>> map = new HashMap<Integer, List<Integer>>();

    public Solution(int[] nums) {
        for(int i = 0; i < nums.length; i++) {
            int num = nums[i];
            if(!map.containsKey(num)) {
                map.put(num, new ArrayList<Integer>());
            }
            List<Integer> arr = map.get(num);
            arr.add(i);
        }
    }
    
    public int pick(int target) {
        if(!map.containsKey(target)) return -1;
        List<Integer> arr = map.get(target);
        int len = arr.size();
        int r = new Random().nextInt(len);
        return arr.get(r);
    }
}
