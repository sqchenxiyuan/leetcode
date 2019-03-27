/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
    return getNextChoice("", n, n)
}

function getNextChoice(str, left, right){
    if (left === 0 && right === 0) return [str]

    let arr = []

    if (left > 0){
        arr = arr.concat(getNextChoice(str + "(", left - 1, right))
    }

    if (left < right){
        if (left === 0){
            arr.push(str + new Array(right).fill(")").join(""))
        } else {
            arr = arr.concat(getNextChoice(str + ")", left, right - 1))
        }
    }

    return arr
}

console.log(JSON.stringify(generateParenthesis(0)))
console.log(JSON.stringify(generateParenthesis(1)))
console.log(JSON.stringify(generateParenthesis(2)))
console.log(JSON.stringify(generateParenthesis(3)))
console.log(JSON.stringify(generateParenthesis(4)))