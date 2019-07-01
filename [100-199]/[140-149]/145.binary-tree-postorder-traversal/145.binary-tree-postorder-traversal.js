/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
let postorderTraversal = function(root) {
    if (root === null) return []
    arr = postorderTraversal(root.left)
    arr = arr.concat(postorderTraversal(root.right))
    arr.push(root.val)
    return arr
}

