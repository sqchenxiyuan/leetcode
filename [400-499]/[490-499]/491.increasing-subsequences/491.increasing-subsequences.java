/*
 * @lc app=leetcode id=491 lang=java
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
import java.util.*;

public class Solution {
    public List<List<Integer>> findSubsequences(int[] nums) {
        Set<String> set = new HashSet<>();
        List<List<Integer>> list = new ArrayList<>();
        for(int i = 0; i < nums.length; i++){
            int num = nums[i];
            int l = list.size();
            for(int j = 0; j < l; j++){
                List<Integer> li = list.get(j);
                if(li.get(li.size() - 1) <= num){
                    List<Integer> newLi = new ArrayList<>(li);
                    newLi.add(num);
                    String key = getKey(newLi);
                    if(!set.contains(key)){
                        list.add(newLi);
                        set.add(key);
                    }
                }
            }

            List<Integer> newArr = new ArrayList<Integer>();
            newArr.add(num);
            String key = getKey(newArr);
            if(!set.contains(key)){
                list.add(newArr);
                set.add(key);
            }
        }

        List<List<Integer>> result = new ArrayList<>();
        for(List<Integer> l : list){
            if(l.size() > 1){
                result.add(l);
            }
        }

        return result;
    }

    private String getKey(List<Integer> arr){
        StringBuilder sb = new StringBuilder();
        for(int num : arr){
            sb.append(num);
            sb.append(':');
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        new Solution().findSubsequences(new int[]{4,6,7,7});
    }
}
// @lc code=end

