import java.util.*;

class Solution {
    public List<String> removeInvalidParentheses(String s) {
        Set<String> res = new HashSet<>();
        res.add(s);
        int left = 0;

        //删除左边的
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if(c == '('){
                left++;
            } else if(c == ')') {
                left--;
            } else {
                continue;
            }

            if(left < 0){
                Set<String> nextRes = new HashSet<>();
                for(String str : res){
                    for(int j = 0; j <= i; j++){
                        if(str.charAt(j) == ')'){
                            s = str.substring(0, j) + str.substring(j + 1);
                            nextRes.add(s);
                        }
                    }
                }
                res = nextRes;
                left = 0;
                i--;
            }
        }

        //删除右边
        int right = 0;
        for(int i = s.length() - 1; i >= 0; i--){
            char c = s.charAt(i);
            if(c == ')'){
                right++;
            } else if(c == '(') {
                right--;
            } else {
                continue;
            }

            if(right < 0){
                Set<String> nextRes = new HashSet<>();
                for(String str : res){
                    for(int j = str.length() - 1; j >= i; j--){
                        if(str.charAt(j) == '('){
                            s = str.substring(0, j) + str.substring(j + 1);
                            nextRes.add(s);
                        }
                    }
                }
                res = nextRes;
                right = 0;
            }
        }
        return new ArrayList<>(res);
    }

    public static void main(String[] args) {
        new Solution().removeInvalidParentheses(")(()c))(");
    }
}