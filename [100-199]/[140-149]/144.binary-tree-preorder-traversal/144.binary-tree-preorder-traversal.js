/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
let preorderTraversal = function(root) {
    if (root === null) return []
    let arr = [root.val]
    arr = arr.concat(preorderTraversal(root.left))
    arr = arr.concat(preorderTraversal(root.right))
    return arr
}

