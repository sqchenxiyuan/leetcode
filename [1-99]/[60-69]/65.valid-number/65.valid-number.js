/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// let isNumber = function(s) {
//     s = s.trim()
//     if (/^(\+|\-)?(\d+(\.\d*)?|\.\d+)(e(\+|\-)?\d+)?$/.test(s)){
//         return true
//     }
//     return false
// }

/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function(s) {
    s = s.trim()
    if (!s || isNaN(Number(s))){
        return false
    } else {
        return true
    }
}

// console.log(isNumber("0"))
// console.log(isNumber(" 0.1 "))
// console.log(isNumber("abc"))
// console.log(isNumber("1 a" ))
// console.log(isNumber("e9"))
console.log(isNumber("6e6.5"))

