/*
 * @lc app=leetcode id=372 lang=javascript
 *
 * [372] Super Pow
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
let superPow = function(a, b) {
    if (b.length === 0) return 1

    function pow(x, y){
        let mul = 1
        let num = x % 1337
        while (y > 0){
            if (y & 1 === 1){
                mul = (mul * num) % 1337
            }
            num = (num * num) % 1337
            y = y >> 1
        }
        return mul
    }
    
    let sum = 1
    let num = a
    while (b.length){
        let x = b.pop()
        sum = (sum * pow(num, x)) % 1337
        num = pow(num, 10)
    }

    return sum
}
// @lc code=end


// console.log(superPow(2, [3]))
// console.log(superPow(2, [1, 0]))
// console.log(superPow(2, [1, 0, 7, 8, 2, 5, 4, 1, 2, 3, 9, 8, 5, 6, 4]))