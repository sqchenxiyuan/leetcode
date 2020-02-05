/*
 * @lc app=leetcode id=472 lang=java
 *
 * [472] Concatenated Words
 */

// @lc code=start
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class WordTreNode{
    public boolean isWord = false;
    public Map<Character, WordTreNode> nexts = new HashMap<>();
}

public class Solution {
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        //构造前缀树
        WordTreNode root = new WordTreNode();
        for(String word : words){
            if(word.length() == 0) continue;
            WordTreNode node = root;
            for(char c : word.toCharArray()){
                if(!node.nexts.containsKey(c)){
                    node.nexts.put(c, new WordTreNode());
                }
                node = node.nexts.get(c);
            }
            node.isWord = true;
        }

        //根据递归树寻找
        List<String> results = new ArrayList<>();
        for(String word : words){
            if(findMaxWay(word, root) > 1){
                results.add(word);
            }
        }
        return results;
    }

    private int findMaxWay(String word, WordTreNode root){ //找到大于两个组成的即可(加速)
        WordTreNode node = root;
        char[] chars = word.toCharArray();
        for(int i = 0; i < chars.length; i++){
            char c = chars[i];
            if(!node.nexts.containsKey(c)){
                return 0;
            }
            node = node.nexts.get(c);

            if(node.isWord){
                int count = findMaxWay(word.substring(i + 1), root);
                if(count > 0){
                    return count + 1;
                }
            }
        }
        if(node.isWord){
            return 1;
        } else {
            return 0;
        }
    }
}
// @lc code=end

