/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
/**
 * kx0 + b = 0
 * kx + b = y
 * 
 * k(x - x0) = y
 * 2x(x - x0) = y
 * x - x0 = y / 2x
 * x0 = x - y / 2x
 * 
 */
let isPerfectSquare = function(num) {
    if (num < 0) return false
    let curx = num
    while (1){
        // console.log(curx)
        let y = curx * curx - num
        if (y === 0) return true

        let nextx = parseInt(curx - y / (2 * curx))
        if (nextx >= curx){
            return false
        }
        curx = nextx
    }
}
// @lc code=end

// console.log(isPerfectSquare(195))
// console.log(isPerfectSquare(16))
// console.log(isPerfectSquare(14))
// console.log(isPerfectSquare(0))

