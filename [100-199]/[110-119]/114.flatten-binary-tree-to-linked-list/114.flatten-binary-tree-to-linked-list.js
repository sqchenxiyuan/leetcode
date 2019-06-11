/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function(root) {
    if (root === null) return null
    flatten(root.left)
    flatten(root.right)
    let left = root.left
    let right = root.right
    root.left = null
    root.right = left

    while (root.right){
        root = root.right
    }

    root.right = right
}

