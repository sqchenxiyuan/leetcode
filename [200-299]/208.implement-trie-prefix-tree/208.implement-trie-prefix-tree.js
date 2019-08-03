/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */
/**
 * Initialize your data structure here.
 */
let Trie = function() {
    this.root = {
        path: {},
        isWord: false
    }
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++){
        let c = word[i]
        if (!current.path[c]){
            return false
        }
        current = current.path[c]
    }
    return current.isWord
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root
    for (let i = 0; i < prefix.length; i++){
        let c = prefix[i]
        if (!current.path[c]){
            return false
        }
        current = current.path[c]
    }
    return true
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

