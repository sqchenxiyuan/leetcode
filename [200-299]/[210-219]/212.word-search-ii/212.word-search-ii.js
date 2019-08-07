/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function(board, words) {
    if (words.length === 0) return []
    let m = board.length
    if (m === 0) return []
    let n = board[0].length
    if (n === 0) return []

    //构建前缀树
    let trie = {
        path: {},
        isWord: false,
    }
    words.forEach(word => {
        let current = trie
        for (let i = 0; i < word.length; i++){
            let c = word[i]
            if (!current.path[c]){
                current.path[c] = {
                    path: {},
                    isWord: false
                }
            }
            current = current.path[c]
        }
        current.isWord = true
        current.word = word
    })

    let results = []
    //深度优先
    let map = new Array(m).fill(0).map(_ => new Array(n).fill(false)) //走过的路径
    function findWord(i, j, trie){
        if (i < 0 || i >= m) return
        if (j < 0 || j >= n) return
        if (map[i][j]) return

        let c = board[i][j]
        if (!trie.path[c]) return
        let node = trie.path[c]

        if (node.isWord){
            results.push(node.word)
            node.isWord = false
        }

        map[i][j] = true
        findWord(i - 1, j, node)
        findWord(i + 1, j, node)
        findWord(i, j - 1, node)
        findWord(i, j + 1, node)
        map[i][j] = false

        return
    }

    //遍历寻找
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            findWord(i, j, trie)
        }
    }

    return results
}

// console.log(findWords([
//     ["o", "a", "a", "n"],
//     ["e", "t", "a", "e"],
//     ["i", "h", "k", "r"],
//     ["i", "f", "l", "v"]
// ], ["oath", "pea", "eat", "rain"]))