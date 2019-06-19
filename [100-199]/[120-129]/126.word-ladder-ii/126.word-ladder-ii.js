/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
let findLadders = function(beginWord, endWord, wordList) {
    //判断是否在wordList
    if (wordList.indexOf(endWord) === -1) return []

    let words = [beginWord, ...wordList]
    let map = new Array(words.length).fill(0).map(_ => [])

    function getWordDistance(w1, w2){
        let count = 0
        for (let i = 0; i < w1.length; i++){
            if (w1[i] !== w2[i]) count++
        }
        return count
    }

    //寻找之间可以前往的路径
    for (let i = 0; i < words.length; i++){
        for (let j = i + 1; j < words.length; j++){
            if (getWordDistance(words[i], words[j]) === 1){
                map[i].push(j)
                map[j].push(i)
            }
        }
    }

    let start = 0
    let end = words.indexOf(endWord)
    let wordsHaveGo = {} //已经走过的单词集合
    let arr = [
        {current: start, path: [start]}
    ]

    while (arr.length > 0){
        let ok = false //是否有抵达的
        let nextArr = [] //下一轮的路径列表
        let levelWords = [] //这一层进入的单词
        arr.forEach(({current, path}) => {
            map[current].forEach(next => {
                if (wordsHaveGo[next]) return //走过的不再走
                levelWords.push(next)
                nextArr.push({
                    current: next,
                    path: path.concat(next)
                })
                if (next === end){
                    ok = true
                }
            })
        })

        levelWords.forEach(word => wordsHaveGo[word] = true) //设置已经走过
        arr = nextArr
        if (ok) break
    }
    arr = arr.filter(arr => arr.current === end).map(arr => {
        return arr.path.map(i => words[i])
    })

    return arr
}


// let x = findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
// let x1 = findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"])

// console.log(x)
