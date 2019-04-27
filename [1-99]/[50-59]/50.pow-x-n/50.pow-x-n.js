/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function(x, n) {
    if (n === 0) return 1
    
    let flag = false
    if (n < 0){
        flag = true
        n = -n
    }

    let result = 1
    let now = x
    while (n > 0){
        if (n % 2 === 1){
            result = result * now
        }
        n = Math.floor(n / 2)
        now = now * now 
    }

    if (flag){
        result = 1 / result
    }

    return result
}


// console.log(myPow(2, 0))
// console.log(myPow(2, -2))
// console.log(myPow(2, 1))
// console.log(myPow(2, 2))
// console.log(myPow(2, 3))
// console.log(myPow(2, 4))
// console.log(myPow(2, 5))
