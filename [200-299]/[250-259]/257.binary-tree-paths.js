/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
let binaryTreePaths = function(root) {
    let result = []
    function find(node, str){
        if (!node) return
        str = str + node.val
        if (node.left || node.right) {
            str = str + "->"
            find(node.left, str)
            find(node.right, str)
        } else {
            result.push(str)
        }
    }

    find(root, "")

    return result
}

