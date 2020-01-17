/*
 * @lc app=leetcode id=450 lang=java
 *
 * [450] Delete Node in a BST
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
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        TreeNode cur = root;
        TreeNode pre = null;

        while (cur != null && cur.val != key){
            pre = cur;
            if(key < cur.val){
                cur = cur.left;
            } else if(key > cur.val) {
                cur = cur.right;
            }
        }

        if(pre == null){
            return deleteRootNode(cur);
        } else if(pre.left == cur){
            pre.left = deleteRootNode(cur);
        } else {
            pre.right = deleteRootNode(cur);
        }
        return root;
    }

    private TreeNode deleteRootNode(TreeNode root){
        if (root == null) return null;
        if(root.right == null) return root.left;
        TreeNode x = root.right;
        while (x.left != null) x = x.left;
        x.left = root.left;
        return root.right;
    }
}
// @lc code=end

