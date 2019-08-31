/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function(root, p, q) {
    
    let path = []
    let pathA, pathB
    function find(node){
        if (!node) return
        path.push(node)
        if (node === p) pathA = path.slice()
        if (node === q) pathB = path.slice()
        find(node.left)
        find(node.right)
        path.pop()
    }
    find(root)

    let i = 0
    while (pathA[i + 1] === pathB[i + 1]) i++

    return pathA[i]
}
