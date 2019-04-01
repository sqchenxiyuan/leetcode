/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.78%)
 * Total Accepted:    509.1K
 * Total Submissions: 1.9M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
//使用manacher算法
/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
    //处理为必然是奇数长度的回文
    s = "." + s.split("").join(".") + "."

    let length = s.length
    let p = new Array(length)
    let ci = 0
    let cw = 0

    p[0] = 0

    for (let i = 0; i < length ; i++){
        let l = 0
        if (p[ci] + ci >= i){
            if (i + p[ci * 2 - i] < cw){
                p[i] = p[ci * 2 - i]
                continue
            }
            l = cw - i
        }

        for (;
            i - l >= 0 &&
            i + l < length &&
            s[i + l] === s[i - l];
            l++);

        p[i] = l - 1

        if (p[i] >= p[ci]){
            ci = i
            cw = p[i] + i
        }

    }

    return s.substring(ci - p[ci], ci + p[ci] + 1).split("").filter((data, index) => {
        if (1 === index % 2){
            return true
        } else {
            return false
        }
    }).join("")
}

