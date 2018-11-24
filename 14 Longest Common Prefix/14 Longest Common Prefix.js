/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let minLength = strs[0] && strs[0].length || 0
    strs.forEach(str => {
        minLength = Math.min(minLength, str.length)
    })
    let prefix = ""
    for (let i = 0; i < minLength; i++){
        let c = strs[0][i]
        if (strs.some(str => str[i] !== c)){
            break
        }
        prefix = prefix + c
    }
    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))