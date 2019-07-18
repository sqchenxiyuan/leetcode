/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
let titleToNumber = function(s) {
    let base = 1
    let sum = 0
    for (let i = s.length - 1; i >= 0; i--){
        let num = s.charCodeAt(i) - 65
        sum = sum + base * (num + 1) //会多计算一次，但是base不会算上这一次
        base = base * 26
    }
    return sum
}


// console.log(titleToNumber("A"))
// console.log(titleToNumber("AB"))
// console.log(titleToNumber("ZY"))
// console.log(titleToNumber("ZYAC"))