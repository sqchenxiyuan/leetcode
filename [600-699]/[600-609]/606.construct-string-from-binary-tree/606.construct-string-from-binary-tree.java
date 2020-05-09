/*
 * @lc app=leetcode.cn id=606 lang=java
 *
 * [606] 根据二叉树创建字符串
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
    public String tree2str(TreeNode t) {
        if(t == null) return "";
        String left = tree2str(t.left);
        String right = tree2str(t.right);
        if(right.length() > 0){
            return t.val + "(" + left + ")" + "(" + right + ")";
        } else if(left.length() > 0) {
            return t.val + "(" + left + ")";
        } else {
            return String.valueOf(t.val);
        }
    }
}
// @lc code=end

