/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
let findAndReplacePattern = function(words, pattern) {
    let p = getPattern(pattern)
    words = words.filter(word => p === getPattern(word))
    return words
}

function getPattern(str){
    let obj = {}
    let p = ""
    let n = 0
    for (let i = 0; i < str.length; i++){
        let c = str.charAt(i)
        if (obj[c]){
            p += obj[c]
        } else {
            obj[c] = String.fromCharCode([n + 97])
            p += obj[c]
            n++
        }
    }
    return p
}

console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"))