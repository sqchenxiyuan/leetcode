/*
 * @lc app=leetcode id=414 lang=java
 *
 * [414] Third Maximum Number
 */

// @lc code=start
public class Solution {

//    public int thirdMax(int[] nums) {
//        if(nums.length == 1) return nums[0];
//        if(nums.length == 2) return Math.max(nums[0], nums[1]);
//
//        List<Integer> maxArr = new ArrayList<Integer>();
//        for(int num : nums){
//            if(maxArr.contains(num)) continue; //存在的不处理
//            int index = maxArr.size();
//            while (index > 0 && num > maxArr.get(index - 1)) index--;
//            maxArr.add(index, num);
//            if(maxArr.size() > 3) maxArr.remove(3);
//        }
//
//        return maxArr.size() == 3 ? maxArr.get(2) : maxArr.get(0);
//    }

    public int thirdMax(int[] nums) {
        int premax = Integer.MAX_VALUE;
        int[] maxArr = new int[3];
        int maxCount = 0;
        for(int i = 0; i < 3; i++){
            int max = Integer.MIN_VALUE;
            boolean has = false;
            for(int num : nums){
                if(num >= max && num < premax) {
                    max = num;
                    has = true;
                }
            }
            if(has){
                premax = max;
                maxArr[maxCount] = max;
                maxCount++;
            }
        }
        if(maxCount == 3) return maxArr[2];
        return maxArr[0];
    }
}
// @lc code=end

