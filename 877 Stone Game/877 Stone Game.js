
/**
 * @param {number[]} piles
 * @return {boolean}
 */
let stoneGame = function(piles) {
    let len = piles.length
    let map = new Array(len).fill(0).map(_ => new Array(len))
    function x(map, i, j){
        if (map[i][j]) return map[i][j]

        if (i + 1 === j){
            map[i][j] = Math.abs(piles[i] - piles[j]) //alex比lee多拿多少
        } else {
            //取i
            map[i][j] = Math.max(
                Math.min(piles[i] - piles[i + 1] + x(map, i + 2, j), piles[i] - piles[j] + x(map, i + 1, j - 1)),
                Math.min(piles[j] - piles[j - 1] + x(map, i, j - 2), piles[j] - piles[i] + x(map, i + 1, j - 1))
            )
        }
        return map[i][j]
    }
    return x(map, 0, len - 1) > 0
}
