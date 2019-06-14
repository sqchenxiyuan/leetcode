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
    
    function connectLeft(root, rootLeft){
        if (root === null) return

        let nextLevelLeft = rootLeft ? rootLeft.right : null

        connectLeft(root.left, nextLevelLeft)
        connectLeft(root.right, root.left)

        if (rootLeft){
            rootLeft.next = root
        }
    }

    connectLeft(root, null)

    return root
}

