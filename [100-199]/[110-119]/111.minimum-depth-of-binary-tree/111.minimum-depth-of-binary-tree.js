/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
let minDepth = function(root) {
    if (root === null) return 0
    if (root.left && root.right) return 1 + Math.min(minDepth(root.left), minDepth(root.right))
    else if (root.left && root.right === null) return 1 + minDepth(root.left)
    else if (root.left === null && root.right) return 1 + minDepth(root.right)
    return 1
}

