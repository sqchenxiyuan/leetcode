/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
let findSubstring = function(s, words) {
    if (words.length === 0) return []
    let wordlen = words[0].length
    let childlen = wordlen * words.length
    let map = {}
    words.forEach(word => {
        map[word] ? map[word]++ : (map[word] = 1)
    })

    let results = []

    for (let i = 0; i <= s.length - childlen; i++){
        let nowMap = {}
        let count = 0
        for (let j = 0; j < words.length; j++){
            let word = s.substr(i + j * wordlen, wordlen)
            if (map[word]){
                if (nowMap[word]){
                    if (nowMap[word] === map[word]){
                        ok = false
                        break
                    } else {
                        nowMap[word]++
                        count++
                    }
                } else {
                    nowMap[word] = 1
                    count++
                }
            } else {
                ok = false
                break
            }
        }
        if (count === words.length) results.push(i)
    }

    return results
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
console.log(findSubstring("wordgoodstudentgoodword", ["word", "student"]))
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]))