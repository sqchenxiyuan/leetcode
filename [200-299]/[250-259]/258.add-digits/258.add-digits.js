/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/**
 * @param {number} num
 * @return {number}
 */
let addDigits = function(num) {
    while (num >= 10){
        let sum = 0
        while (num > 0){
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num
}

// console.log(addDigits(38))

