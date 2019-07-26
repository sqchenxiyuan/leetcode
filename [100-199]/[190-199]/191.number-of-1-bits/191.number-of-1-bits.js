/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function(n) {
    let count = 0
    while (n !== 0){
        if (1 & n) count++
        n = n >>> 1
    }
    return count
}
// console.log(hammingWeight(parseInt("00000000000000000000000000001011", 2)))
// console.log(hammingWeight(parseInt("00000000000000000000000010000000", 2)))
// console.log(hammingWeight(parseInt("11111111111111111111111111111101", 2)))

