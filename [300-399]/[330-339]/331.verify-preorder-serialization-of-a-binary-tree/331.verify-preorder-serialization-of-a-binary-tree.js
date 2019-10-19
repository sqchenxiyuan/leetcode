/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
let isValidSerialization = function(preorder) {
    let arr = preorder.split(",")
    let index = 0
    function toBuild(){
        if (index >= arr.length) return
        if (arr[index] === "#") return
        index++
        toBuild()
        index++
        toBuild()
    }

    toBuild()

    return index === arr.length - 1
}
// @lc code=end

// console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"))
// console.log(isValidSerialization("1,#"))
// console.log(isValidSerialization("9,#,#,1"))