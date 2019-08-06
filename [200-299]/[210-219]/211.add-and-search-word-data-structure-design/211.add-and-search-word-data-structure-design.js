/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 */
/**
 * Initialize your data structure here.
 */
let WordDictionary = function() {
    this.root = {
        path: {},
        isWord: false
    }
}

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++){
        let c = word[i]
        if (!current.path[c]){
            current.path[c] = {
                path: {},
                isWord: false
            }
        }
        current = current.path[c]
    }
    current.isWord = true
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    function searchNode(index, node){
        if (!node) return false
        if (index === word.length) return node.isWord
        
        let c = word[index]
        if (c === "."){
            if (Object.keys(node.path).some(k => searchNode(index + 1, node.path[k]))){
                return true
            } else {
                return false
            }
        } else {
            return searchNode(index + 1, node.path[c])
        }
    }

    return searchNode(0, this.root)
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

