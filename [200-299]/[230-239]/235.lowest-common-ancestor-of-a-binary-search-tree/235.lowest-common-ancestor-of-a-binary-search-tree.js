/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//找共同祖先
let lowestCommonAncestor = function(root, p, q) {
    let rootVal = root.val
    let maxVal = Math.max(p.val, q.val)
    let minVal = Math.min(p.val, q.val)
    if (minVal <= rootVal && rootVal <= maxVal) return root
    else if (maxVal < rootVal) return lowestCommonAncestor(root.left, p, q)
    else return lowestCommonAncestor(root.right, p, q)
}

