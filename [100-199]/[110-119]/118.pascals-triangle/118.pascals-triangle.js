/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    if (numRows === 0) return []
    let cl = [1]
    let result = [cl]
    for (let i = 2; i <= numRows;i++){
        let nl = [1]
        for (let j = 1; j < cl.length; j++){
            nl[j] = cl[j] + cl[j - 1]
        }
        nl.push(1)
        result.push(nl)
        cl = nl
    }
    return result
}

