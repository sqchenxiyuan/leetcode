/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 */
// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
let isScramble = function(s1, s2) {
    if (s1 === s2) return true

    //判断初始两个字符串,字符数目一不一样
    let charsMap = {}
    for (let i = 0; i < s1.length; i++){
        let c = s1[i]
        if (!charsMap[c]) charsMap[c] = 0
        charsMap[c]++
    }

    for (let i = 0; i < s2.length; i++){
        let c = s2[i]
        if (!charsMap[c] || charsMap[c] === 0) return false
        charsMap[c]--
    }
    
    //寻找所有情况
    let l = s1.length
    for (let i = 1; i < l; i++){
        
        if (isScramble(s1.substring(0, i), s2.substring(0, i)) 
            && isScramble(s1.substring(i), s2.substring(i)))
            return true
        
        if (isScramble(s1.substring(0, i), s2.substring(l - i, l)) 
            && isScramble(s1.substring(i), s2.substring(0, l - i)))
            return true
    }


    return false
}

// console.log(isScramble("great", "rgeat"))
// console.log(isScramble("great", "rgtae"))
// console.log(isScramble("abcde", "caebd"))
