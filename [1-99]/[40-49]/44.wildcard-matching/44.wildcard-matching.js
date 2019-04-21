/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (22.52%)
 * Total Accepted:    171.1K
 * Total Submissions: 755.3K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 * 
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
    let cache = new Array(s.length + 1).fill(0).map(_ => new Array(p.length + 1).fill(0))

    function matchFromCache(sp, pp){
        if (cache[sp][pp] !== 0) return cache[sp][pp]
        cache[sp][pp] = match(sp, pp)
        return cache[sp][pp]
    }

    function match(sp, pp){
        if (pp === p.length){
            if (sp === s.length){
                return true
            } else {
                return false
            }
        }
    
        if (p[pp] === "?"){
            if (sp === s.length){
                return false
            }
            return matchFromCache(sp + 1, pp + 1)
        } else if (p[pp] === "*"){
            let arr = []
            for (let i = sp; i <= s.length; i++){
                arr.push([i, pp + 1])
            }
            return arr.some(_ => matchFromCache(_[0], _[1]))
        } else {
            if (s[sp] === p[pp]){
                return matchFromCache(sp + 1, pp + 1)
            } else {
                return false
            }
        }
    }

    return matchFromCache(0, 0)
}

// console.log(isMatch("aa", "a")) //false
// console.log(isMatch("aa", "*")) //true
// console.log(isMatch("cb", "?a")) //false
// console.log(isMatch("adceb", "*a*b")) //true
// console.log(isMatch("acdcb", "a*c?b")) //false
// console.log(isMatch("", "?")) //false

