/**
 * @param {number[][]} grid
 * @return {number}
 */
let projectionArea = function(grid) {
    let zCount = 0
    let xCountArr = []
    let yCountArr = []
    for (let i = 0; i < grid.length; i++){
        let xarr = grid[i] || []
        xCountArr[i] = 0
        for (let j = 0; j < xarr.length; j++){
            if (!yCountArr[j]) yCountArr[j] = 0
            let h = xarr[j]
            if (h > 0){
                zCount++
            }
            if (h > xCountArr[i]){
                xCountArr[i] = h
            }
            if (h > yCountArr[j]){
                yCountArr[j] = h
            }
        }
    }

    let sum = xCountArr.reduce((sum, x) => sum + x, 0) + yCountArr.reduce((sum, y) => sum + y, 0) + zCount
    return sum
}
console.log(projectionArea([[2]]))
console.log(projectionArea([[1, 2], [3, 4]]))
console.log(projectionArea([[1, 0], [0, 2]]))
console.log(projectionArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
console.log(projectionArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]))