/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
let isPowerOfFour = function(num) {
    if (num <= 0) return false
    if (num === 1) return true
    while (num > 1){
        if (num % 4 === 0){
            num = num / 4
        } else {
            return false
        }
    }
    return true
}
// @lc code=end

// console.log(isPowerOfFour(16))
// console.log(isPowerOfFour(5))