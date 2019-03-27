let lengthOfLongestSubstring = function(s) {
    let l = s.length,
        hashMap = {},
        n = 0, //当前字符串长度
        max = 0

    for (let i = 0; i < l; i++){
        let char = s[i]
        n++
        if (hashMap[char] !== undefined && i - hashMap[char] < n){
            n = i - hashMap[char]
        }
        if (n > max)max = n
        hashMap[char] = i
    }

    return max
}

console.log(lengthOfLongestSubstring("pwwkew"))
