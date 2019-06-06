/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
let recoverTree = function(root) {
    let arr = []
    function loadTree(tree){
        if (tree === null) return
        loadTree(tree.left)
        arr.push(tree)
        loadTree(tree.right)
    }
    loadTree(root)

    let nums = arr.map(_ => _.val)
    nums.sort((a, b) => a - b)
    arr.forEach((_, i) => {
        _.val = nums[i]
    })
}

