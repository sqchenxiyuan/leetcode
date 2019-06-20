/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
let ladderLength = function(beginWord, endWord, wordList) {
    //判断是否在wordList
    if (wordList.indexOf(endWord) === -1) return 0

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
        start
    ]

    let count = 1
    loop1: while (arr.length > 0){
        count++
        let nextArr = [] //下一轮的单词列表
        for (let i = 0; i < arr.length; i++){
            let current = arr[i]
            for (let j = 0; j < map[current].length; j++){
                let next = map[current][j]
                if (wordsHaveGo[next]) continue //走过的不再走
                nextArr.push(next)
                if (next === end){
                    return count
                }
            }
        }
        nextArr.forEach(word => wordsHaveGo[word] = true) //设置已经走过
        arr = nextArr
    }
    return 0
}

