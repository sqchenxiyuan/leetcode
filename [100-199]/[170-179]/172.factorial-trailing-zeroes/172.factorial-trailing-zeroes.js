/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */
/**
 * @param {number} n
 * @return {number}
 */
let trailingZeroes = function(n) {
    //求的是末尾0,2*5=10    求末尾是5和0的数目  需要考虑25=5*5的情况，这个会产生2个0
    let sum = 0
    while (n > 0){
        n = Math.floor(n / 5)
        sum += n
    }
    return sum
}

// console.log(trailingZeroes(3))
// console.log(trailingZeroes(5))

