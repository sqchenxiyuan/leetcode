/*
 * @lc app=leetcode id=488 lang=java
 *
 * [488] Zuma Game
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int findMinStep(String board, String hand) {
        Map<Character, Integer> handMap = new HashMap<>();
        handMap.put('R', 0);
        handMap.put('Y', 0);
        handMap.put('B', 0);
        handMap.put('G', 0);
        handMap.put('W', 0);

        for(char boll : hand.toCharArray()){
            handMap.put(boll, handMap.get(boll) + 1);
        }

        return help(board, handMap);
    }

    private int help(String board, Map<Character, Integer> handMap){
        int len = board.length();
        if(len == 0) return 0;
        if(len == 1){
            if(handMap.get(board.charAt(0)) >= 2){
                return 2;
            }
        }

        int min = Integer.MAX_VALUE;
        char[] chars = board.toCharArray();
        for(int i = 0; i < len - 1; ){
            char c1 = chars[i];
            char c2 = chars[i + 1];
            if(c1 == c2){
                if(handMap.get(c1) >= 1){
                    handMap.put(c1, handMap.get(c1) - 1);
                    int re = help(toEmpty(board.substring(0, i) + board.substring(i + 2)), handMap);
                    if(re >= 0) min = Math.min(min, re + 1);
                    if(board.length() >= 8){
                        int x = 1;
                    }
                    handMap.put(c1, handMap.get(c1) + 1);
                }

                i+=2;
            } else {
                if(handMap.get(c1) >= 2){
                    handMap.put(c1, handMap.get(c1) - 2);
                    int re = help(toEmpty(board.substring(0, i) + board.substring(i + 1)), handMap);
                    if(re >= 0) min = Math.min(min, re + 2);
                    handMap.put(c1, handMap.get(c1) + 2);
                }
                i++;
            }
        }
        if(len > 2){
            char lastChar = chars[len - 1];
            if(lastChar == chars[0]){
                if(handMap.get(lastChar) >= 1){
                    handMap.put(lastChar, handMap.get(lastChar) - 1);
                    int re = help(toEmpty(board.substring(1, len - 1)), handMap);
                    if(re >= 0) min = Math.min(min, re + 1);
                    handMap.put(lastChar, handMap.get(lastChar) + 1);
                }
            } else {
                if(handMap.get(lastChar) >= 2){
                    handMap.put(lastChar, handMap.get(lastChar) - 2);
                    int re = help(toEmpty(board.substring(0, len - 1)), handMap);
                    if(re >= 0) min = Math.min(min, re + 2);
                    handMap.put(lastChar, handMap.get(lastChar) + 2);
                }
            }
        }

        return min == Integer.MAX_VALUE ? -1 : min;
    }

    private String toEmpty(String board){
        char[] chars = board.toCharArray();
        int len = chars.length;
        for(int i = 0; i < len; i++){
            int j = (i + 1) % len;
            int count = 1;
            while (chars[i] == chars[j] && i != j) {
                count++;
                j = (j + 1) % len;
            }
            if(count < 3) continue;
            else if(i < j){
                return toEmpty(board.substring(0, i) + board.substring(j));
            } else {
                return toEmpty(board.substring(j, i));
            }
        }
        return board;
    }

    public static void main(String[] args) {
//        System.out.println(new Solution().findMinStep("WWRRBBWW", "WRBRW"));
        System.out.println(new Solution().findMinStep("G", "GGGG"));
    }
};
// @lc code=end

