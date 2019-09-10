/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
let isUgly = function(num) {
    let arr = [25, 9, 4, 5, 3, 2]
    for (let i = 0; i < arr.length && num > 0; i++)
        while (num % arr[i] == 0)
            num /= arr[i]
    return num === 1
}

// console.log(isUgly(6))
// console.log(isUgly(8))
// console.log(isUgly(14))

