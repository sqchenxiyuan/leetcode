/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */
/**
 * @param {number} n
 * @return {number}
 */
let nthUglyNumber = function(n) {
    
    let arr = [1]
    let x2 = 0, x3 = 0, x5 = 0
    for (let i = 1; i < n; i++){
        let y2 = arr[x2] * 2
        let y3 = arr[x3] * 3
        let y5 = arr[x5] * 5
        let next = Math.min(y2, y3, y5)
        if (next === y2)x2++
        if (next === y3)x3++
        if (next === y5)x5++
        arr[i] = next
    }

    return arr[n - 1]
}
// console.log(nthUglyNumber(100))
