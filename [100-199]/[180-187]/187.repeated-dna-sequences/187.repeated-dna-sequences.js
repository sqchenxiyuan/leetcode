/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */
/**
 * @param {string} s
 * @return {string[]}
 */
let findRepeatedDnaSequences = function(s) {
    let set1 = new Set()
    let set2 = new Set()

    for (let i = 0; i <= s.length - 10; i++){
        let ss = s.substring(i, i + 10)
        if (set1.has(ss)){
            set2.add(ss)
        } else {
            set1.add(ss)
        }
    }

    return Array.from(set2.keys())
}

// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
// console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))

