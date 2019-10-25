/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
//每多一位加一
let countBits = function(num) {
    if (num === 0) return [0]
    if (num === 1) return [0, 1]
    let arr = [0, 1]
    let current = 2
    let i = 2
    while (i <= num){
        for (;i < current * 2 && i <= num; i++){
            arr[i] = arr[i - current] + 1
        }
        current *= 2
    }
    return arr
}
// @lc code=end

// let x1 = countBits(2)
// let x2 = countBits(5)
// let x3 = countBits(10)
// console.log(123)