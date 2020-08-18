class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        helper(n,n,new StringBuilder(), res);
        return res;
    }

    private void helper(int left, int right, StringBuilder sb, List<String> res){
        if(left == 0){
            StringBuilder rightStr = new StringBuilder();
            while(right-- > 0){
                rightStr.append(')');
            }

            res.add(sb.toString() + rightStr.toString());
            return;
        }
        
        sb.append('(');
        helper(left - 1, right, sb, res);
        sb.deleteCharAt(sb.length() - 1);

        if(left < right){
            sb.append(')');
            helper(left, right - 1, sb, res);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}