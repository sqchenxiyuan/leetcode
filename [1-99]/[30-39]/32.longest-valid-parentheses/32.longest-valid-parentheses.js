/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.04%)
 * Total Accepted:    181.5K
 * Total Submissions: 720.5K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
let longestValidParentheses = function(s) {
    let stack = [] //堆栈
    let larr = [] //长度的记录
    let max = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] === "("){
            stack.push(i)
        } else {
            if (stack.length > 0){
                let left = stack.pop()
                let len = i - left + 1 + (larr[left - 1] || 0)
                larr[i] = len
                max = Math.max(len, max)
            }
        }
    }
    return max
}

// console.log(longestValidParentheses(""))
// console.log(longestValidParentheses("(()"))
// console.log(longestValidParentheses(")()())"))
// console.log(longestValidParentheses("(()((("))
// console.log(longestValidParentheses("()(())"))

