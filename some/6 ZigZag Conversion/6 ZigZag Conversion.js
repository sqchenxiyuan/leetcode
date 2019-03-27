let convert = function(s, numRows) {
    if (numRows === 1) return s
    let l = s.length
    let result = []
    let x = 0, y = 0
    let gnum = numRows - 1

    for (let i = 0; i < l; i++){
        if (!result[y]){
            result[y] = ""
        }

        result[y] += s[i]

        if (Math.floor(i / gnum) % 2 === 0){
            y++
        } else {
            x++
            y--
        }
    }
    return result.join("")
}

console.log(convert("ABC", 2))