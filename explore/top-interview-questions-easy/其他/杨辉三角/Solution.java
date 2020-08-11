class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> res = new ArrayList<>();
        if(numRows <= 0) return res;
        List<Integer> pre = new ArrayList<>();
        for(int i = 1; i <= numRows; i++){
            List<Integer> x = new ArrayList<>();
            for(int j = 1; j <= i; j++){
                if(j == 1 || j == i){
                    x.add(1);
                } else {
                    x.add(pre.get(j - 2) + pre.get(j - 1));
                }
            }
            res.add(x);
            pre = x;
        }
        return res;
    }
}