/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */
/**
 * @param {number} n
 * @return {number[]}
 */
let grayCode = function(n) {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]
    let num = Math.pow(2, n - 1)
    let last = grayCode(n - 1)
    let result = []
    for (let i = 0; i < last.length - 1; i += 2){
        //跳出跳回
        result.push(last[i])
        result.push(last[i] + num)
        result.push(last[i + 1] + num)
        result.push(last[i + 1])
    }

    return result
}

// let x = grayCode(0)
// let x1 = grayCode(1)
// let x2 = grayCode(2)
// let x3 = grayCode(3)

// console.log(123)
