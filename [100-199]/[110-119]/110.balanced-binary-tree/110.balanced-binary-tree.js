/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
let isBalanced = function(root) {
    function getTreeDeepIfIsBalanced(root){
        if (root === null) return 0
        let left = getTreeDeepIfIsBalanced(root.left)
        let right = getTreeDeepIfIsBalanced(root.right)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
        return 1 + Math.max(left, right)
    }

    return getTreeDeepIfIsBalanced(root) === -1 ? false : true
}

