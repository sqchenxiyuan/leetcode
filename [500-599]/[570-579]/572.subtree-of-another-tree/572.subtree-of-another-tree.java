/*
 * @lc app=leetcode.cn id=572 lang=java
 *
 * [572] 另一个树的子树
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
    public boolean isSubtree(TreeNode s, TreeNode t) {
        if(s == null) return sametree(s, t);
        return sametree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
    }

    public boolean sametree(TreeNode s, TreeNode t) {
        if(s == null && t == null) return true;
        else if(s == null || t == null) return false;
        else {
            return s.val == t.val && sametree(s.left, t.left) && sametree(s.right, t.right);
        }
    }
}
// @lc code=end

