/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
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
// /**
//  * @param {Node} root
//  * @return {Node}
//  */
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
    
    function connectRight(root, rootRight){
        if (root === null) return

        root.next = rootRight
        let nextLevelRight = null
        while (rootRight){
            if (rootRight.left){
                nextLevelRight = rootRight.left
                break
            }

            if (rootRight.right){
                nextLevelRight = rootRight.right
                break
            }

            rootRight = rootRight.next
        }

        //先从右边开始,保证rootRight已经有next了
        if (root.right){
            connectRight(root.right, nextLevelRight)

            if (root.left){
                connectRight(root.left, root.right)
            }
        } else {
            if (root.left){
                connectRight(root.left, nextLevelRight)
            }
        }
    }

    connectRight(root, null)

    return root
}
