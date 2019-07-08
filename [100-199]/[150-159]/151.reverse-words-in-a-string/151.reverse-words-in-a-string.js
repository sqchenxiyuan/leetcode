/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */
/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
    return s.split(" ").filter(_ => _).reverse().join(" ").trim()
}

