/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null

    let headval = postorder[postorder.length - 1]
    let head = new TreeNode(headval)
    if (inorder.length === 1) return head

    let leftLen = inorder.indexOf(headval)
    head.left = buildTree(inorder.slice(0, leftLen), postorder.slice(0, leftLen))
    head.right = buildTree(inorder.slice(1 + leftLen), postorder.slice(leftLen, postorder.length - 1))

    return head
}

