/*
 * @lc app=leetcode id=563 lang=java
 *
 * [563] Binary Tree Tilt
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

    int sum = 0;

    public int findTilt(TreeNode root) {
        getNodeSum(root);
        return sum;
    }

    public int getNodeSum(TreeNode root){
        if(root == null) return 0;
        int left = getNodeSum(root.left);
        int right = getNodeSum(root.right);
        sum += Math.abs(left - right);
        return  root.val + left + right;
    }
}
// @lc code=end

