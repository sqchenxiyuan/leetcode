/*
 * @lc app=leetcode id=538 lang=java
 *
 * [538] Convert BST to Greater Tree
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
    private int sum = 0;

    public TreeNode convertBST(TreeNode root) {
        sum = 0;
        help(root);
        return root;
    }

    private void help(TreeNode root){
        if(root == null) return;

        help(root.right);
        sum+=root.val;
        root.val = sum;
        help(root.left);
    }
}
// @lc code=end

