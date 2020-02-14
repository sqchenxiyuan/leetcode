/*
 * @lc app=leetcode id=481 lang=java
 *
 * [481] Magical String
 */

// @lc code=start
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public int magicalString(int n) {
        if(n == 0) return 0;
        if(n <= 3) return 1;
        if(n <= 4) return 2;
        if(n <= 5) return 3;

        Queue<Integer> list = new LinkedList<>();
        list.offer(1);
        list.offer(1);
        int len = 5; //当前长度
        int prenum = 1;
        int count1 = 3;
        while (len < n){
            int cnum = list.poll();
            prenum = prenum == 1 ? 2 : 1;

            list.offer(prenum);
            if(prenum == 1) count1++;
            len++;

            if(cnum == 2 && len < n){
                list.offer(prenum);
                if(prenum == 1) count1++;
                len++;
            }
        }

        return count1;
    }

    public static void main(String[] args) {
        new Solution().magicalString(100);
    }
}
// @lc code=end

