/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
let wordPattern = function(pattern, str) {
    let words = str.split(" ")
    if (words.length !== pattern.length) return false
    let wordMap = {}
    let pMap = {}
    for (let i = 0; i < pattern.length; i++){
        let p = pattern[i]
        let word = words[i]
        if (pMap[p] && pMap[p] !== word 
            || wordMap[word] && wordMap[word] !== p ) return false
        pMap[p] = word
        wordMap[word] = p
    }
    return true
}

