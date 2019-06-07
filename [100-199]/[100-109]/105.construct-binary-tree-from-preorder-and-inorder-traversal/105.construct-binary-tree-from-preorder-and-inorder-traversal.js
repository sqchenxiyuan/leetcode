/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null

    let headval = preorder[0]
    let head = new TreeNode(headval)
    if (preorder.length === 1) return head

    let leftLen = inorder.indexOf(headval)
    head.left = buildTree(preorder.slice(1, 1 + leftLen), inorder.slice(0, leftLen))
    head.right = buildTree(preorder.slice(1 + leftLen), inorder.slice(1 + leftLen))

    return head
}

// function TreeNode(val) {
//     this.val = val
//     this.left = this.right = null
// }

// let x = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
// console.log(213)

