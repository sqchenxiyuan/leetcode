import java.util.ArrayList;
import java.util.List;

public class Solution {
    public String reformat(String s) {
        List<Character> nums = new ArrayList<>();
        List<Character> abcs = new ArrayList<>();
        for(char c : s.toCharArray()){
            if('a' <= c && c <= 'z'){
                abcs.add(c);
            } else if('0' <= c && c <= '9') {
                nums.add(c);
            } else {
                return "";
            }
        }

        if(Math.abs(nums.size() - abcs.size()) > 1) return "";
        int i = 0;
        int j = 0;
        StringBuilder sb = new StringBuilder();
        if(abcs.size() > nums.size()){
            sb.append(abcs.get(j++));
        }
        while (i < nums.size()){
            sb.append(nums.get(i++));
            if(j < abcs.size())sb.append(abcs.get(j++));
        }
        return sb.toString();
    }
}
