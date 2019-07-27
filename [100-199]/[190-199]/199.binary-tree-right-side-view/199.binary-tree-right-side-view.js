/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
let rightSideView = function(root) {
    let result = []

    function preorderTraversal(root, level){
        if (!root) return
        result[level] = root.val
        preorderTraversal(root.left, level + 1)
        preorderTraversal(root.right, level + 1)
    }
    preorderTraversal(root, 0)

    return result
}

