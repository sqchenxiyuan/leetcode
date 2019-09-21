/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let gameOfLife = function(board) {
    let cache = {}
    function getData(x, y){
        if (!cache[x]) return 0
        if (!cache[x][y]) return 0
        return cache[x][y]
    }

    function setData(x, y, val){
        if (!cache[x]) cache[x] = {}
        cache[x][y] = val
    }

    function getSideCound(x, y){
        let arr = [
            getData(x - 1, y - 1),
            getData(x - 1, y),
            getData(x - 1, y + 1),
            getData(x, y - 1),
            getData(x, y + 1),
            getData(x + 1, y - 1),
            getData(x + 1, y),
            getData(x + 1, y + 1),
        ]
        return arr.filter(_ => _ === 1 || _ === -1).length
    }

    let m = board.length
    if (m === 0) return
    let n = board[0].length
    if (n === 0) return

    let lives = [] //新复活的
    let dies = [] //新死去的
    //加载数据
    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            setData(x, y, board[x][y])
        }
    }

    //更新
    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            let c = getData(x, y)
            let count = getSideCound(x, y)
            if (c === 1 && (count < 2 || count > 3)){
                setData(x, y, -1)
                dies.push([x, y])
            } else if (c === 0 && count === 3){
                setData(x, y, 2)
                lives.push([x, y])
            }
        }
    }

    lives.forEach(([x, y]) => setData(x, y, 1))
    dies.forEach(([x, y]) => setData(x, y, 0))

    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            board[x][y] = getData(x, y)
        }
    }
}

// gameOfLife(
//     [
//         [0, 1, 0],
//         [0, 0, 1],
//         [1, 1, 1],
//         [0, 0, 0]
//     ]
// )