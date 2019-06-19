/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let mid = parseInt(str.length / 2)
    for (let i = 0; i < mid; i++){
        if (str[i] !== str[str.length - i - 1]) return false
    }
    return true
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("a"))
// console.log(isPalindrome("aa"))
// console.log(isPalindrome("aaa"))
// console.log(isPalindrome("aaab"))

