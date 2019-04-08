/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (31.42%)
 * Total Accepted:    403.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
    //sunday算法

    //计算偏移表
    let p = needle.length
    let shift = {}
    for (let i = 0; i < p; i++){
        shift[needle[i]] = p - i
    }

    //匹配
    let i1 = 0 //主串标识
    let i2 = 0 //子串标识
    for (; i1 < haystack.length;){
        i2 = 0
        while (i2 < p && haystack[i1 + i2] === needle[i2]){ i2++ }
        if (i2 === p) break
        i1 = i1 + (shift[haystack[i1 + p]] || p + 1)
    }
    if (i2 === p) return i1
    return -1
}

