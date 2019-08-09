/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 */
/**
 * @param {string} s
 * @return {string}
 */
let shortestPalindrome = function(s) {
    let extendStr = "#"
    for (let i = 0; i < s.length; i++){
        extendStr += s[i]
        extendStr += "#"
    }

    let maxI = 0
    let preMI = 0 //可以延伸到最远的点的中心点
    let p = [0] //以点i为中心回文的半径长度(不包含自己)
    for (let i = 0; i < extendStr.length / 2 + 1; i++){
        let l = 0
        if (preMI + p[preMI] > i ){
            if (i + p[preMI * 2 - i] < preMI + p[preMI]){
                p[i] = p[preMI * 2 - i]
                continue
            }
            l = preMI + p[preMI] - i
        }

        for (;
            i - l >= 0 &&
            i + l < extendStr.length &&
            extendStr[i + l] === extendStr[i - l];
            l++);

        p[i] = l - 1

        if (p[i] === i){
            maxI = i
        }

        if (p[i] >= p[preMI]){
            preMI = i
        }
    }

    return s.slice(maxI).split("").reverse().join("") + s
}


// console.log(shortestPalindrome("aacecaaa"))
// console.log(shortestPalindrome("abcd"))
// console.log(shortestPalindrome("abbacd"))
// console.log(shortestPalindrome("aaaaa"))
