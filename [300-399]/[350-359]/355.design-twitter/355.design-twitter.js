/*
 * @lc app=leetcode id=355 lang=javascript
 *
 * [355] Design Twitter
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function User(id){
    this.id = id
    this.tweets = []
    this.followeds = new Set()
}

function Twitte(id, time){
    this.id = id
    this.time = time
}


let Twitter = function() {
    this.time = 0

    this.users = new Map()
}

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.users.has(userId)) this.users.set(userId, new User(userId))
    this.users.get(userId).tweets.unshift(new Twitte(tweetId, this.time++))
}

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.users.has(userId)) return []

    let user = this.users.get(userId)
    let tweetsArr = [...user.followeds, user.id].map(id => this.users.get(id).tweets)
    let indexs = new Array(tweetsArr.length).fill(0)

    let targetArr = []
    for (let count = 0; count < 10; count++){
        let maxTime = -1
        let maxIndex = -1
        for (let i = 0; i < indexs.length; i++){
            let t = tweetsArr[i][indexs[i]]
            if (t && t.time > maxTime){
                maxTime = t.time
                maxIndex = i
            }
        }
        if (maxIndex >= 0){
            targetArr.push(tweetsArr[maxIndex][indexs[maxIndex]].id)
            indexs[maxIndex]++
        } else {
            break
        }
    }

    return targetArr
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId === followeeId) return
    if (!this.users.has(followerId)) this.users.set(followerId, new User(followerId))
    if (!this.users.has(followeeId)) this.users.set(followeeId, new User(followeeId))

    this.users.get(followerId).followeds.add(followeeId)
}

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.users.has(followerId)) this.users.set(followerId, new User(followerId))
    if (!this.users.has(followeeId)) this.users.set(followeeId, new User(followeeId))

    this.users.get(followerId).followeds.delete(followeeId)
}

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

