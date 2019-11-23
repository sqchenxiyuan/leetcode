/*
 * @lc app=leetcode id=385 lang=java
 *
 * [385] Mini Parser
 */

// @lc code=start
package fun.chenxiyuan.demo.leetcode_385;

import java.util.ArrayList;
import java.util.List;

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *     // Constructor initializes an empty nested list.
 *     public NestedInteger();
 *
 *     // Constructor initializes a single integer.
 *     public NestedInteger(int value);
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public void setInteger(int value);
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public void add(NestedInteger ni);
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */

class Solution {

    private boolean isChar(char c){
        return '0' <= c && c <= '9';
    }

    public NestedInteger deserialize(String s) {
        s = s.trim();
        List<NestedInteger> arr = new ArrayList<NestedInteger>();

        char firstChar = s.charAt(0);
        if(firstChar == '['){
            int start = 1;
            int end = 1;
            int len = s.length();
            if(s.length() == 2){
                return new NestedInteger();
            }
            int level = 0; //只有0层才分开
            List<String> strarr = new ArrayList<String>();
            while (end < len){
                char c = s.charAt(end);
                if(c == '[') {
                    level++;
                    end++;
                } else if(c == ']' && level > 0) {
                    level--;
                    end++;
                } else if(c == ',' && level == 0
                    || c == ']' && level == 0){
                    strarr.add(s.substring(start, end));
                    end++;
                    start = end;
                } else {
                    end++;
                }
            }

            NestedInteger r = new NestedInteger();
            for (String str : strarr){
                r.add(deserialize(str));
            }
            return r;
        } else {
            int number = Integer.valueOf(s);
            return new NestedInteger(number);
        }
    }
}
// @lc code=end

