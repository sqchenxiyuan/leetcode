/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
    let str = n.toString(3)
    return /^10*$/.test(str)
}
// @lc code=end

// console.log(isPowerOfThree(27))
// console.log(isPowerOfThree(0))
// console.log(isPowerOfThree(9))
// console.log(isPowerOfThree(45))