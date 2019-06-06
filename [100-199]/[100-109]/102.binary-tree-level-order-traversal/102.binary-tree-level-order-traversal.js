/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
let levelOrder = function(root) {
    let result = []
    function setLevelData(root, level){
        if (root === null) return
        if (result[level] == undefined) result[level] = []
        result[level].push(root.val)
        setLevelData(root.left, level + 1)
        setLevelData(root.right, level + 1)
    }
    setLevelData(root, 0)
    return result
}

