/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
let maxPathSum = function(root) {
    if (root === null) return 0

    let max = root.val
    
    function getTreeMaxSum(root){
        let left = Math.max(root.left ? getTreeMaxSum(root.left) : 0, 0)
        let right = Math.max(root.right ? getTreeMaxSum(root.right) : 0, 0)
        max = Math.max(max, left + right + root.val)
        return Math.max(left, right) + root.val
    }

    getTreeMaxSum(root)

    return max
}

