/*
 * @lc app=leetcode id=514 lang=java
 *
 * [514] Freedom Trail
 */

// @lc code=start
import java.util.*;

class Plan{
    public int steps = 0;
    public int lastIndex = 0;

    Plan(int _steps, int _lastIndex){
        steps = _steps;
        lastIndex = _lastIndex;
    }
}

public class Solution {
    public int findRotateSteps(String ring, String key) {
        Map<Character, List<Integer>> ringMap = new HashMap<>();
        int ringLen = ring.length();
        char[] ringChars = ring.toCharArray();
        for(int i = 0; i < ringLen; i++){
            char c = ringChars[i];
            List<Integer> list = null;
            if(!ringMap.containsKey(c)){
                list = new ArrayList<>();
                ringMap.put(c, list);
            } else {
                list = ringMap.get(c);
            }
            list.add(i);
        }

        //终点一样选最小的
        //终点不一样差距不能大于整体长度(这样可以直接跳转过去了)
        Set<Plan>[] plans = new Set[key.length() + 1];
        plans[0] = new HashSet<>();
        plans[0].add(new Plan(0, 0));

        for(int i = 0; i < key.length(); i++){
            Map<Integer, Plan> lastCharIndexMap = new HashMap<>();
            Set<Plan> prePlans = plans[i];
            Set<Plan> nextPlans = new HashSet<>();
            char nextChar = key.charAt(i);

            List<Integer> charIndexs = ringMap.get(nextChar);

            for(Plan plan : prePlans){
                int lastIndex = plan.lastIndex;
                int[] nearestIndex = findNearestIndex(lastIndex, charIndexs);

                for(int nextIndex : nearestIndex){
                    int jumps = Math.abs(lastIndex - nextIndex);
                    jumps = Math.min(ringLen - jumps, jumps);
                    addNewStep(lastCharIndexMap, nextPlans, new Plan(plan.steps + jumps + 1, nextIndex));
                }
            }

            plans[i + 1] = nextPlans;
        }

        Set<Plan> allPlan = plans[key.length()];
        int result = Integer.MAX_VALUE;
        for(Plan plan : allPlan){
            result = Math.min(result, plan.steps);
        }
        return result;
    }

    private void addNewStep(Map<Integer, Plan> lastCharIndexMap, Set<Plan> nextPlans, Plan newPlan){
        int index = newPlan.lastIndex;
        if(lastCharIndexMap.containsKey(index)){
            Plan otherPlan = lastCharIndexMap.get(index);
            if(otherPlan.steps > newPlan.steps){
                lastCharIndexMap.put(index, newPlan);
                nextPlans.add(newPlan);
                nextPlans.remove(otherPlan);
            }
        } else{
            lastCharIndexMap.put(index, newPlan);
            nextPlans.add(newPlan);
        }
    }

    private int[] findNearestIndex(int stratIndex, List<Integer> charIndexs){
        //可以优化为二分查找
        int l = charIndexs.size();
        for(int i = 0; i < l; i++){
            int x = charIndexs.get(i);
            if(x == stratIndex){
                return new int[]{x};
            }
            if(x > stratIndex){
                return new int[]{charIndexs.get((i - 1 + l) % l), x};
            }
        }
        return new int[]{charIndexs.get(0), charIndexs.get(l - 1)};
    }

    public static void main(String[] args) {
        new Solution().findRotateSteps("godding", "gd");
    }
}
// @lc code=end

