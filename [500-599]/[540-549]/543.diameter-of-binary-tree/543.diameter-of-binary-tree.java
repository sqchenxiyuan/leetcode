/*
 * @lc app=leetcode id=543 lang=java
 *
 * [543] Diameter of Binary Tree
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
public class Solution {
    private int max = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        traversal(root);
        return max;
    }

    private int traversal(TreeNode root){ //返回深度
        if(root == null) return 0;
        int left = traversal(root.left);
        int right = traversal(root.right);
        max = Math.max(left + right, max);
        return Math.max(left, right) + 1;
    }
}
// @lc code=end

