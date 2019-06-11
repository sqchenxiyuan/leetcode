/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
let pathSum = function(root, sum) {
    if (root === null) return []
    if (root.left === null && root.right === null){
        if (root.val === sum){
            return [[root.val]]
        } else {
            return []
        }
    }

    let arr = pathSum(root.left, sum - root.val).concat(pathSum(root.right, sum - root.val))
    arr.forEach(l => l.unshift(root.val))
    return arr
}

