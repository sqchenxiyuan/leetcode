/*
 * @lc app=leetcode.cn id=623 lang=java
 *
 * [623] 在二叉树中增加一行
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
    public TreeNode addOneRow(TreeNode root, int v, int d) {
        int maxDeep = getDeep(root);
        if(d == 1 || maxDeep < d - 1){
            TreeNode newRoot = new TreeNode(v);
            newRoot.left = root;
            return newRoot;
        }

        return help(root, v, d);
    }

    private TreeNode help(TreeNode root, int v, int d){
        if(root == null) return null;
        if(d == 2){
            TreeNode newLeft = new TreeNode(v);
            newLeft.left = root.left;
            TreeNode newRight = new TreeNode(v);
            newRight.right = root.right;
            root.left = newLeft;
            root.right = newRight;
        } else {
            root.left = help(root.left, v, d - 1);
            root.right = help(root.right, v, d - 1);;
        }
        return root;
    }

    private int getDeep(TreeNode root){
        if(root == null) return 0;
        return Math.max(getDeep(root.left), getDeep(root.right)) + 1;
    }
}
// @lc code=end

