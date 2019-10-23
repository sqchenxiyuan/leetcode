/*
 * @lc app=leetcode id=336 lang=javascript
 *
 * [336] Palindrome Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
let palindromePairs = function(words) {
    function isPalindrome(str){
        let left = 0, right = str.length - 1
        while (left < right){
            if (str[left] === str[right]){
                left++
                right--
            } else {
                return false
            }
        }
        return true
    }
    
    let result = []
    for (let i = 0; i < words.length; i++){
        for (let j = i + 1; j < words.length; j++){
            if (isPalindrome(words[i] + words[j])){
                result.push([i, j])
            }
            if (isPalindrome(words[j] + words[i])){
                result.push([j, i])
            }
        }
    }

    return result
}
// @lc code=end

// let x1 = palindromePairs(["abcd", "dcba", "lls", "s", "sssll"])
// let x2 = palindromePairs(["bat", "tab", "cat"])
// let x3 = palindromePairs(["a", ""])
// console.log(123)