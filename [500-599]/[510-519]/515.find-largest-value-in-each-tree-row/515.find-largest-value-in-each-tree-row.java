/*
 * @lc app=leetcode id=515 lang=java
 *
 * [515] Find Largest Value in Each Tree Row
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
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        helper(root, list, 0);
        return list;
    }

    private void helper(TreeNode root, List<Integer> list, int deep){
        if(root == null) return;
        if(list.size() <= deep) list.add(Integer.MIN_VALUE);
        list.set(deep, Math.max(root.val, list.get(deep)));
        helper(root.left,list,deep + 1);
        helper(root.right,list,deep + 1);
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
// @lc code=end

