/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.20%)
 * Total Accepted:    284.6K
 * Total Submissions: 743.1K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    let add = 0 //进
    let len = Math.max(a.length, b.length)
    let sum = []
    for (let i = 0; i < len;i++){
        let ac = a[a.length - 1 - i] || "0"
        let bc = b[b.length - 1 - i] || "0"
        if (ac === "0" && bc === "0"){
            if (add === 0){
                sum[i] = "0"
            } else {
                sum[i] = "1"
            }
            add = 0
        } else if (ac === "1" && bc === "1"){
            if (add === 0){
                sum[i] = "0"
            } else {
                sum[i] = "1"
            }
            add = 1
        } else {
            if (add === 0){
                sum[i] = "1"
                add = 0
            } else {
                sum[i] = "0"
                add = 1
            }
        }
    }
    if (add === 1) sum[len] = "1"
    sum = sum.reverse().join("")
    return sum
}


// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// let addBinary = function(a, b) {
//     let add = 0 //进
//     let len = Math.max(a.length, b.length)
//     let sum = []
//     for (let i = 0; i < len;i++){
//         let ac = a[a.length - 1 - i] || 0
//         let bc = b[b.length - 1 - i] || 0
//         let s = add + ac * 1 + bc * 1
//         if (s < 2){
//             sum[i] = s
//             add = 0
//         } else {
//             add = 1
//             sum[i] = s % 2
//         }
//     }
//     if (add === 1) sum[len] = 1
//     sum = sum.reverse().join("")
//     return sum
// }

// console.log(addBinary("1010", "1011"))
