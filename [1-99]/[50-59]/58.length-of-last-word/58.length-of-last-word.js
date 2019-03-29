/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.18%)
 * Total Accepted:    253.1K
 * Total Submissions: 786.4K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
    s = s.trim()
    let wordl = 0
    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] !== " "){
            wordl++
        } else {
            break
        }
    }
    return wordl
}

// console.log(lengthOfLastWord("Hello World"))

