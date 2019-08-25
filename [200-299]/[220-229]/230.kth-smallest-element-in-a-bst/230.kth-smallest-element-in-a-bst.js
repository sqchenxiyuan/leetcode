/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function(root, k) {

    let n = k
    let result = 0
    function find(root){
        if (!root) return
        if (n === 0) return

        find(root.left)
        if (--n === 0) result = root.val
        find(root.right)
    }

    find(root)
    return result
}

