/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let sArr = {}
    let tArr = {}
    
    for (let i = 0; i < s.length; i++){
        let sn = s.charCodeAt(i)
        let tn = t.charCodeAt(i)
        if (!sArr[sn])sArr[sn] = 0
        if (!tArr[tn])tArr[tn] = 0
        sArr[sn]++
        tArr[tn]++
    }

    for (key in sArr){
        if (sArr[key] !== tArr[key]) return false
    }

    return true
}

// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "car"))

