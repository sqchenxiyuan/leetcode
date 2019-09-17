/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
/**
 * @param {number} n
 * @return {number}
 */
// let numSquares = function(n) {
//     let cache = new Array(n + 1).fill(0)
//     function findNum(n){
//         if (n === 0) return 0
//         if (cache[n]) return cache[n]
        
//         let s = Math.sqrt(n)
//         let min = Infinity
//         for (let i = 1; i <= s; i++){
//             min = Math.min(min, findNum(n - i * i) + 1)
//         }
//         cache[n] = min 
//         return cache[n]
//     }

//     return findNum(n)
// }

let numSquares = function(n) {
    let cache = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++){
        let min = n
        for (let j = 1; j * j <= i; j++){
            min = Math.min(min, cache[i - j * j] + 1)
        }
        cache[i] = min
    }

    return cache[n]
}

// console.log(numSquares(12))
// console.log(numSquares(13))

