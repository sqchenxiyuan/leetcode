/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(s) {
    s = s.split("")

    function isVowel(c){
        return c === "a" 
            || c === "e" 
            || c === "i" 
            || c === "o" 
            || c === "u"
            || c === "A" 
            || c === "E" 
            || c === "I" 
            || c === "O" 
            || c === "U"
    }

    let i = 0, j = s.length - 1
    while (true){
        while (i < j && !isVowel(s[i])) i++
        while (i < j && !isVowel(s[j])) j--
        if (i < j){
            [s[i], s[j]] = [s[j], s[i]]
            i++
            j--
        } else {
            break
        }
    }

    return s.join("")
}
// @lc code=end

// console.log(reverseVowels("hello"))
// console.log(reverseVowels("leetcode"))
