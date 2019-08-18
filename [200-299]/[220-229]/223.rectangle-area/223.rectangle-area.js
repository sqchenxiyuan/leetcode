/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
let computeArea = function(A, B, C, D, E, F, G, H) {
    let sum1 = (C - A) * (D - B), sum2 = (H - F) * (G - E)
    if (E >= C || F >= D || B >= H || A >= G) return sum1 + sum2
    return sum1 - ((Math.min(G, C) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F))) + sum2
}
