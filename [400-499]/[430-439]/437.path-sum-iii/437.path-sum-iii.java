/*
 * @lc app=leetcode id=437 lang=java
 *
 * [437] Path Sum III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int pathSum(TreeNode root, int sum) {
        return pathSum(root, sum, new HashMap<>());
    }

    private int pathSum(TreeNode root, int sum, Map<TreeNode, Map<Integer, Integer>> cache){
        if(root == null) return 0;

        int result = pathSumAsHead(root, sum, cache)
                + pathSum(root.left, sum, cache)
                + pathSum(root.right, sum, cache);

        return result;
    }

    private int pathSumAsHead(TreeNode root, int sum, Map<TreeNode, Map<Integer, Integer>> cache){
        if(root == null) return 0;

        if(cache.containsKey(root) && cache.get(root).containsKey(sum)){
            return cache.get(root).get(sum);
        }
        int result = 0;
        int val = root.val;
        if(sum == val){
            result = 1;
        }

        result = result
                + pathSumAsHead(root.left, sum - val, cache)
                + pathSumAsHead(root.right, sum - val, cache);

        if(!cache.containsKey(root))cache.put(root, new HashMap<>());
        cache.get(root).put(sum, result);
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

