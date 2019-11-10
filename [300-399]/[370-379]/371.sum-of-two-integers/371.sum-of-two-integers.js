/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
let getSum = function(a, b) {
    if (b == 0) return a
    let sum = a ^ b //之和(不进位)
    let carry = (a & b) << 1 //进位
    return getSum(sum, carry)
}
// @lc code=end

// console.log(getSum(1, 2))
// console.log(getSum(-2, 3))
console.log(getSum(-5, -7))