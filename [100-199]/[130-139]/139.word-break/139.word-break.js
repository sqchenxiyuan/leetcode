/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let wordBreak = function(s, wordDict) {

    function Node(val){
        this.val = val
        this.isWord = false
        this.map = {}
    }

    let root = new Node()

    function addWord(word){
        let now = root
        for (let i = 0; i < word.length; i++){
            let c = word[i]
            if (now.map[c]){
                now = now.map[c]
            } else {
                let newNode = new Node(c)
                now.map[c] = newNode
                now = newNode
            }
        }
        now.isWord = true
    }

    //根据词典构造前缀树
    for (let i = 0; i < wordDict.length; i++){
        addWord(wordDict[i])
    }

    let cache = []

    function ifCanBreak(start){
        if (start === s.length) return true
        if (cache[start] != undefined) return cache[start]
        let now = root
        let result = false
        for (let i = start; i < s.length && now; i++){
            let next = now.map[s[i]]
            if (!next) break
            if (next.isWord && ifCanBreak(i + 1)){
                result = true
                break
            }
            now = next
        }
        cache[start] = result
        return result 
    }

    return ifCanBreak(0)
}

// console.log(wordBreak("leetcode", ["leet", "code"]))
// console.log(wordBreak("applepenapple", ["apple", "pen"]))
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
//     ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))
