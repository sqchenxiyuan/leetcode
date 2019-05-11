/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */
//最后一行不填充完
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
let fullJustify = function(words, maxWidth) {
    let fillChar = " "

    let lines = []
    let line = []

    let lineLen = 0
    lines.push(line)
    
    //划分到每行
    words.forEach(word => {
        if (lineLen + word.length > maxWidth){
            line = []
            lines.push(line)
            lineLen = word.length + 1
        } else {
            lineLen = lineLen + word.length + 1
        }

        line.push(word)
    })

    //每行排版
    let result = lines.map((line, lineIndex) => {
        let wordNum = line.length //字数
        let intervalNum = wordNum - 1//间隔
        let space = maxWidth - line.reduce((sum, word) => sum + word.length, 0)

        let base = parseInt(space / intervalNum)
        let extendNum = space % intervalNum
        
        if (lineIndex === lines.length - 1){
            base = 1
            extendNum = 0
        }

        let lineWord = ""
        
        line.forEach((word, index) => {
            lineWord = lineWord + word
            let whiteChars = base + (index < extendNum ? 1 : 0)
            lineWord = lineWord.padEnd(lineWord.length + whiteChars, fillChar)
        })

        lineWord = lineWord.padEnd(maxWidth, fillChar).slice(0, maxWidth)

        return lineWord
    })

    return result
}

// console.log(
//     fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
//         "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 10)
// )

// console.log(
//     fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
// )

