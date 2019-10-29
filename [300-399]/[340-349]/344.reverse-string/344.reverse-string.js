/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function(s) {
    let i = 0, j = s.length - 1
    while (i < j){
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }
}
// @lc code=end

