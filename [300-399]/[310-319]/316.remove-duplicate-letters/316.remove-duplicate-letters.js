/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
let removeDuplicateLetters = function(s) {
    if (s.length === 0) return ""
    let arr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) arr[s.charCodeAt(i) - 97]++

    let pos = 0 //遇到不能再减小的值之前的最小值  cbac  就可以指向b
    for (let i = 0; i < s.length; i++){
        if (s[i] < s[pos]) pos = i //选最小的
        if (--arr[s.charCodeAt(i) - 97] === 0) break
    }

    return s[pos] + removeDuplicateLetters(s.substring(pos + 1).replace(new RegExp(s[pos], "g"), ""))
}
// @lc code=end

// console.log(removeDuplicateLetters("bcabc"))
// console.log(removeDuplicateLetters("cbacdcbc"))

