/*
 * @lc app=leetcode id=201 lang=javascript
 *
 * [201] Bitwise AND of Numbers Range
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let rangeBitwiseAnd = function(m, n) {
    //找出前两位相同的二进制部分
    let move = 0
    while (m != n){
        move++
        m = m >> 1
        n = n >> 1
    }

    return m << move
}

// console.log(rangeBitwiseAnd(5, 7))
// console.log(rangeBitwiseAnd(0, 1))

