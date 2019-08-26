/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = function(n) {
    if (n <= 0) return false
    while (n > 1){
        if (n % 2 !== 0) return false
        n = n / 2
    }
    return true
}

