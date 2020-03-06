/*
 * @lc app=leetcode id=508 lang=java
 *
 * [508] Most Frequent Subtree Sum
 */

// @lc code=start

import java.util.*;

public class Solution {
    interface Traversal{
        int getMax();
        int run(TreeNode node);
    }

    public int[] findFrequentTreeSum(TreeNode root) {
        Map<Integer, Set<Integer>> countMap = new HashMap<>();  //每个频率的数目
        Map<Integer, Integer> numMap = new HashMap<>(); //每个数所在的频率

        Traversal traversal = new Traversal() {
            private int max = 0;

            @Override
            public int getMax() {
                return max;
            }

            @Override
            public int run(TreeNode node) {
                if(node == null) return 0;
                int sum = node.val + this.run(node.left) + this.run(node.right);
                int count = 0;
                if(numMap.containsKey(sum)){
                    count = numMap.get(sum);
                    countMap.get(count).remove(sum);
                }
                count++;
                if(!countMap.containsKey(count)){
                    countMap.put(count, new HashSet<>());
                }
                numMap.put(sum, count);
                countMap.get(count).add(sum);
                max = Math.max(max, count);
                return sum;
            }
        };
        traversal.run(root);
        Set<Integer> set = countMap.getOrDefault(traversal.getMax(), new HashSet<>());
        Integer[] arr = set.toArray(new Integer[set.size()]);
        int[] result = new int[arr.length];
        for(int i = 0; i < arr.length; i++){
            result[i] = arr[i];
        }

        return result;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
// @lc code=end

