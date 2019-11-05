/*
 * @lc app=leetcode id=357 lang=javascript
 *
 * [357] Count Numbers with Unique Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// let countNumbersWithUniqueDigits = function(n) {
//     if (n === 0) return 1
//     if (n === 1) return 10
//     if (n > 10) return countNumbersWithUniqueDigits(10)
    
//     let num = 9
//     for (let i = 1, x = 9; i < n; i++, x--){
//         num *= x
//     }

//     return num + countNumbersWithUniqueDigits(n - 1)
// }

let countNumbersWithUniqueDigits = function(n) {
    if (n <= 0) return 1
    if (n === 1) return 10
    if (n > 10) n = 10
    
    let sum = 10
    let num = 9
    for (let i = 1, x = 9; i < n; i++, x--){
        num *= x
        sum += num
    }

    return sum
}

// @lc code=end

// console.log(countNumbersWithUniqueDigits(1))
// console.log(countNumbersWithUniqueDigits(2))
// console.log(countNumbersWithUniqueDigits(3))