class Solution {
    static Map<Character, char[]> map = new HashMap<>();

    Solution(){
        map.put('2', new char[]{'a','b','c'});
        map.put('3', new char[]{'d','e','f'});
        map.put('4', new char[]{'g','h','i'});
        map.put('5', new char[]{'j','k','l'});
        map.put('6', new char[]{'m','n','o'});
        map.put('7', new char[]{'p','q','r', 's'});
        map.put('8', new char[]{'t','u','v'});
        map.put('9', new char[]{'w','x','y', 'z'});
    }

    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if(digits.length() == 0) return res;
        helper(0, digits.toCharArray(), new StringBuilder(), res);
        return res;
    }

    private void helper(int i, char[] chars, StringBuilder sb, List<String> res){
        if(i == chars.length) {
            res.add(sb.toString());
            return;
        }
        char[] nums = map.get(chars[i]);
        for(char c : nums){
            sb.append(c);
            helper(i + 1, chars, sb, res);
            sb.delete(i, i + 1);
        }
    }
}