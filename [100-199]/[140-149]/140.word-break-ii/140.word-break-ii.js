/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
let wordBreak = function(s, wordDict) {
   
    let existCache = new Array(s.length + 1).fill(false)
    existCache[0] = true
    
    for (let i = 1; i <= s.length; i++){
        for (let j = 0; j < wordDict.length; j++){
            let start = i - wordDict[j].length
            if (existCache[start] && start >= 0 && s.slice(start, i) === wordDict[j]){
                existCache[i] = true
            }
        }
    }

    if (!existCache[s.length]) return []
    
    let cache = new Array(s.length + 1).fill(0).map(_ => new Array())
    cache[0] = [[]]
    for (let i = 1; i <= s.length; i++){
        for (let j = 0; j < wordDict.length; j++){
            let start = i - wordDict[j].length
            if (start >= 0 && s.slice(start, i) === wordDict[j]){
                cache[start].forEach(r => {
                    r = r.slice()
                    r.push(wordDict[j])
                    cache[i].push(r)
                })
            }
        }
    }

    return cache[s.length].map(r => r.join(" "))
}
// console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))
// console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]))
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))
