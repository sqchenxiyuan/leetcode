/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
let isValidBST = function(root) {
    
    function checkBST(root, max, min){
        if (root === null) return true
        let val = root.val
        if (val >= max || val <= min) return false
        return checkBST(root.left, val, min) && checkBST(root.right, max, val)
    }

    return checkBST(root, Infinity, -Infinity)
}

