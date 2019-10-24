/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
 */

// @lc code=start
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
let rob = function(root) {
    let cache = new Map()

    function robNode(node){
        if (!node) return 0
        if (cache.get(node)) return cache.get(node)
        let result = Math.max(
            node.val + robNodeChild(node.left) + robNodeChild(node.right),
            robNode(node.left) + robNode(node.right))
        cache.set(node, result)
        return result
    }

    function robNodeChild(node){
        if (!node) return 0
        return robNode(node.left) + robNode(node.right)
    }

    return robNode(root)
}
// @lc code=end

