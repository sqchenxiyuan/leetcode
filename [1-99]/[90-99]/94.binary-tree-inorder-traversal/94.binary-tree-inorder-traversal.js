/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
let inorderTraversal = function(root) {
    let result = []

    function traversal(node){
        if (!node) return
        
        traversal(node.left)
        result.push(node.val)
        traversal(node.right)
    }

    traversal(root)

    return result
}

