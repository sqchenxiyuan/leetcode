/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (49.55%)
 * Total Accepted:    358.9K
 * Total Submissions: 723.4K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given two binary trees, write a function to check if they are the same or
 * not.
 * 
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 * 
 * Example 1:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:     1         1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * Output: false
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * Output: false
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//递归
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
// let isSameTree = function(p, q) {
//     if (p === null && q === null) return true
//     if (p === null || q === null) return false
//     if (p.val !== q.val) return false
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function(p, q) {
    let arr = [[p, q]]
    while (arr.length > 0){
        let [l, r] = arr.shift()
        if (l === null && r === null) continue
        if (l && r && l.val === r.val){
            arr.push([l.left, r.left])
            arr.push([l.right, r.right])
        } else {
            return false
        }
    }
    return true
}
