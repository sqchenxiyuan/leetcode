/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
let maxProduct = function(words) {
    let charMap = {}

    for (let i = 0; i < words.length; i++){
        let word = words[i]
        for (let j = 0; j < word.length; j++){
            let c = word[j]
            if (!charMap[c]) charMap[c] = new Set()
            charMap[c].add(i)
        }
    }
    
    let map = new Array(words.length).fill(0).map(_ => new Array(words.length).fill(1))
    for (let i = 0; i < words.length; i++){
        let word = words[i]
        for (let j = 0; j < word.length; j++){
            let c = word[j]
            charMap[c].forEach(x => map[i][x] = 0)
        }
    }

    let max = 0
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words.length; j++){
            if (map[i][j] === 1){
                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }

    return max
}
// @lc code=end

// console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))
// console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]))
