/*
 * @lc app=leetcode.cn id=648 lang=java
 *
 * [648] 单词替换
 */

// @lc code=start
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Node {
    boolean isRoot = false;
    Map<Character, Node> map = new HashMap<>();
}

public class Solution {
    public String replaceWords(List<String> dict, String sentence) {
        Node dic = new Node();
        for(String str : dict){
            addRoot(dic, str);
        }

        String[] strs = sentence.split(" ");
        for(int i = 0; i < strs.length; i++){
            strs[i] = getRoot(dic, strs[i]);
        }

        return String.join(" ", strs);
    }

    private void addRoot(Node dic, String root){
        Node now = dic;
        for(char c : root.toCharArray()){
            if(!now.map.containsKey(c)){
                now.map.put(c, new Node());
            }
            now = now.map.get(c);
        }
        now.isRoot = true;
    }

    private String getRoot(Node dic, String root){
        Node now = dic;
        char[] chars = root.toCharArray();
        for(int i = 0; i < root.length(); i++){
            if(now.isRoot){
                return root.substring(0, i);
            }
            if(now.map.containsKey(chars[i])){
                now = now.map.get(chars[i]);
            } else {
                break;
            }
        }
        return root;
    }
}
// @lc code=end

