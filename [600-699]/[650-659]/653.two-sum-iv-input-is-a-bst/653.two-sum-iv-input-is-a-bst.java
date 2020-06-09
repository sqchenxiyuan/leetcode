/*
 * @lc app=leetcode.cn id=653 lang=java
 *
 * [653] 两数之和 IV - 输入 BST
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
import java.util.HashSet;
import java.util.Set;

public class Solution {
    private Set<Integer> set = new HashSet<>();

    public boolean findTarget(TreeNode root, int k) {
        return help(root, k);
    }

    private boolean help(TreeNode root, int k){
        if(root == null) return false;
        if(set.contains(k - root.val)) return true;
        set.add(root.val);

        return help(root.left, k) || help(root.right, k);
    }
}
// @lc code=end

