/*
 * @lc app=leetcode id=424 lang=java
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
public class Solution {
    public int characterReplacement(String s, int k) {
        int[] countArr = new int[26]; //滑动窗口内的数据
        char[] chars = s.toCharArray();

        int left = 0;
        int right = 0; //滑动窗口下一步
        loop1 : while (right < chars.length){
            //向右扩展，计算窗口内的最大数目的元素数量
            countArr[chars[right] - 'A']++;
            right++;

            int l = right - left; //当前窗口大小
            for(int i = 0; i < countArr.length; i++){
                if(countArr[i] + k >= l){ //有元素能够满足
                    continue loop1;
                }
            }

            //没有满足的收缩
            countArr[chars[left] - 'A']--;
            left++;
        }

        return right-left;
    }

    public static void main(String[] args) {
        new Solution().characterReplacement("ABABA", 2);
    }
}
// @lc code=end

