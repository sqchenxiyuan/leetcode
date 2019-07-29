/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
function getDigitsSquareSum(num){
    let result = 0
    while (num > 0){
        let d = num % 10
        result += d * d
        num = (num - d) / 10
    }
    return result
}

/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
    let map = {}
    while (!map[n]){
        map[n] = true
        let next = getDigitsSquareSum(n)
        if (next === 1) return true
        n = next
    }
    return false
}

// console.log(isHappy(19))

