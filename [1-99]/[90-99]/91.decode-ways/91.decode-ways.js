/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/**
 * @param {string} s
 * @return {number}
 */
let numDecodings = function(s) {
    let arr = new Array(s.length).fill(0)
    s = s.split("").map((_, i) => s.charCodeAt(i) - 48)

    //初始化前两位
    if (s[0] === 0) return 0
    arr[0] = 1

    if (s.length === 1) return 1

    if (s[1] === 0){
        if (s[0] === 1 || s[0] === 2)arr[1] = 1
        else return 0
    } else if (s[0] * 10 + s[1] <= 26) arr[1] = 2
    else arr[1] = 1

    if (s.length === 2) return arr[1]

    for (let i = 2; i < s.length; i++){
        if (s[i] === 0){
            if (s[i - 1] === 1 || s[i - 1] === 2){
                arr[i] = arr[i - 2]
            } else {
                return 0 //不符合条件
            }
        } else if (s[i - 1] === 1 || (s[i - 1] === 2 && s[i] >= 0 && s[i] <= 6)){
            arr[i] = arr[i - 1] + arr[i - 2]
        } else {
            arr[i] = arr[i - 1]
        }
    }

    return arr[s.length - 1]
}

// console.log(numDecodings("10")) //1
// console.log(numDecodings("227")) //2
// console.log(numDecodings("301")) //0

// console.log(numDecodings("12"))
// console.log(numDecodings("110"))
// console.log(numDecodings("226"))
// console.log(numDecodings("222"))
// console.log(numDecodings("2222"))
// console.log(numDecodings("22222"))
// console.log(numDecodings("000010011"))
// console.log(numDecodings("0"))
// console.log(numDecodings("01"))
