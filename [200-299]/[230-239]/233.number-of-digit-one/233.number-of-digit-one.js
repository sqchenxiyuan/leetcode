/*
 * @lc app=leetcode id=233 lang=javascript
 *
 * [233] Number of Digit One
 */

//0~10{k}中1的个数
function countXDigitOne(k){
    return k * Math.pow(10, k - 1)
}

/**
 * @param {number} n
 * @return {number}
 */
let countDigitOne = function(n) {
    if (n < 1) return 0
    if (n < 10) return 1

    //获取位数
    let k = 0
    while (n >= Math.pow(10, k)) k++
    
    let window = Math.pow(10, k - 1)
    let top = parseInt(n / window)
    let bottom = n % window

    let num = countXDigitOne(k - 1) * top + countDigitOne(bottom)
    if (top === 1){
        num += bottom + 1
    } else {
        num += window
    }

    return num
}

// console.log(countDigitOne(10))
// console.log(countDigitOne(13))
// console.log(countDigitOne(967))
// console.log(countDigitOne(999))
// console.log(countDigitOne(9999))

 