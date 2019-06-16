/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function(rowIndex) {
    if (rowIndex < 0) return []
    let cl = [1]
    for (let i = 1; i <= rowIndex;i++){
        let nl = [1]
        for (let j = 1; j < cl.length; j++){
            nl[j] = cl[j] + cl[j - 1]
        }
        nl.push(1)
        cl = nl
    }
    return cl
}

