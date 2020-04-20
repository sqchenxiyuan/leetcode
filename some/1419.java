public class Solution {
    public int minNumberOfFrogs(String croakOfFrogs) {
        int max = 0;
        int count = 0;
        int c = 0;
        int r = 0;
        int o = 0;
        int a = 0;

        for(char gua : croakOfFrogs.toCharArray()){
            if(gua == 'c'){
                c++;
                count++;
            } else if(gua == 'r'){
                if(c == 0) return -1;
                c--;
                r++;
            } else if(gua == 'o'){
                if(r == 0) return -1;
                r--;
                o++;
            } else if(gua == 'a'){
                if(o == 0) return -1;
                o--;
                a++;
            } else if(gua == 'k'){
                if(a == 0) return -1;
                a--;
                count--;
            }
            max = Math.max(max, count);
        }

        if(count > 0) return -1;
        return max;
    }
}
