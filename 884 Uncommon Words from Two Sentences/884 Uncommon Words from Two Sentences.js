/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
let uncommonFromSentences = function(A, B) {
    let Awords = A.split(" ").map(w => w.trim()).filter(w => w)
    let Bwords = B.split(" ").map(w => w.trim()).filter(w => w)

    let wordsMap = new Map()
    Awords.forEach(word => {
        if (wordsMap.get(word)){
            wordsMap.get(word).count++
        } else {
            wordsMap.set(word, {
                count: 1
            })
        }
    })

    Bwords.forEach(word => {
        if (wordsMap.get(word)){
            wordsMap.get(word).count++
        } else {
            wordsMap.set(word, {
                count: 1
            })
        }
    })
    let arr = []
    wordsMap.forEach(({count}, key) => {
        if (count === 1) arr.push(key)
    })
    return arr
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))
console.log(uncommonFromSentences("apple apple", "banana"))