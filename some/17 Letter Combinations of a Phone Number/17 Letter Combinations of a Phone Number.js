let NUM_MAP = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let data = digits.split("").map(str => str.charCodeAt(0) - 48)
    if(data.length === 0) return []

    let currentarr = [""]

    data.forEach(num => {
        let numarr = NUM_MAP[num]

        let newarr = []
        currentarr.forEach(str => {
            numarr.forEach(c => {
                newarr.push(str + c)
            })
        })

        currentarr = newarr
    })

    return currentarr
}


console.log(letterCombinations(""))
console.log(letterCombinations("23"))
console.log(letterCombinations("234"))