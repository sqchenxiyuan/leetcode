/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
//额外空间
/**
 * @param {Node} root
 * @return {Node}
 */
// let connect = function(root) {
//     let map = {}

//     function connectLevel(root, level){
//         if (!root) return
//         if (map[level]){
//             map[level].next = root
//             map[level] = root
//         } else {
//             map[level] = root
//         }

//         connectLevel(root.left, level + 1)
//         connectLevel(root.right, level + 1)
//     }

//     connectLevel(root, 0)
//     return root
// }

let connect = function(root) {
    if (root === null) return null
    if (!root.left && !root.right) return root

    let left = connect(root.left)
    let right = connect(root.right)
    left.next = right

    //完美二叉树每层都有
    while (left.right){
        left = left.right
        right = right.left
        left.next = right
    }

    return root
}

