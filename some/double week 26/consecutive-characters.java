public class Solution {
    public int maxPower(String s) {
        char pre = 0;
        int count = 0;
        int max = 0;
        for(char c : s.toCharArray()){

            if(c == pre){
                count++;
            } else {
                count = 1;
                pre = c;
            }
            max = Math.max(max, count);
        }
        return max;
    }
}
