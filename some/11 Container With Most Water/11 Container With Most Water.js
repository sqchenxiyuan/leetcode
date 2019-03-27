/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(heights) {
    let i = 0
    let j = heights.length - 1
    let max = 0

    while (j - i > 0){
        max = Math.max(max, Math.min(heights[i], heights[j]) * (j - i))
        if (heights[i] > heights[j]){
            j--
        } else {
            i++
        }
    }

    return max
}

console.log(maxArea([1, 1]))
console.log(maxArea([1, 2, 1]))
console.log(maxArea([1, 2, 3, 1, 3, 1]))