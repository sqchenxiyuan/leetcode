import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int isPrefixOfWord(String sentence, String searchWord) {
        String[] strs = sentence.trim().split(" ");
        for(int i = 0; i < strs.length; i++){
            String str = strs[i];
            if(searchWord.length() > str.length()) continue;
            if(searchWord.equals(str.substring(0, searchWord.length()))){
                return i + 1;
            }
        }
        return -1;
    }
}
