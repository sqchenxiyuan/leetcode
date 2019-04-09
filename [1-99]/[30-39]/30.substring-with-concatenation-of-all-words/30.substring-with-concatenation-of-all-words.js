/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (23.25%)
 * Total Accepted:    127.6K
 * Total Submissions: 546.6K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
let findSubstring = function(s, words) {
    if (words.length === 0) return []
    let wordlen = words[0].length
    let childlen = wordlen * words.length
    let map = {}
    words.forEach(word => {
        map[word] ? map[word]++ : (map[word] = 1)
    })

    let results = []

    for (let i = 0; i <= s.length - childlen; i++){
        let nowMap = {}
        let count = 0
        for (let j = 0; j < words.length; j++){
            let word = s.substr(i + j * wordlen, wordlen)
            if (map[word]){
                if (nowMap[word]){
                    if (nowMap[word] === map[word]){
                        ok = false
                        break
                    } else {
                        nowMap[word]++
                        count++
                    }
                } else {
                    nowMap[word] = 1
                    count++
                }
            } else {
                ok = false
                break
            }
        }
        if (count === words.length) results.push(i)
    }

    return results
}

