/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.04%)
 * Total Accepted:    540.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
let BEAFOR_CHAR = {
    "(": ")",
    "{": "}",
    "[": "]"
}

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++){
        let c = s[i]
        if (BEAFOR_CHAR[c]){
            stack.push(BEAFOR_CHAR[c])
        } else {
            let rc = stack.pop()
            if (rc !== c){
                return false
            }
        }
    }

    if (stack.length === 0){
        return true
    } else {
        return false
    }
}
