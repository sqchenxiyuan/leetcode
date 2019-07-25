/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function(n) {
    return parseInt(n.toString(2).padStart(32, "0").split("").reverse().join(""), 2)
}

// console.log(reverseBits(43261596))
