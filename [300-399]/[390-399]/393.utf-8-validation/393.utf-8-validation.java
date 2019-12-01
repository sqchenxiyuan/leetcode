public class Solution {
    private boolean isTypeOne(int num) {
        return num < 0b10000000;
    }
    
    private boolean isTypeTow(int num) {
        return 0b11000000 <= num && num < 0b11100000;
    }
    
    private boolean isTypeThree(int num) {
        return 0b11100000 <= num && num < 0b11110000;
    }
    
    private boolean isTypeFour(int num) {
        return 0b11110000 <= num && num < 0b11111000;
    }
    
    private boolean isExtend(int num) {
        return 0b10000000 <= num && num < 0b11000000;
    }
    
    public boolean validUtf8(int[] data) {
        int idx = 0;
        while (idx < data.length) {
            int num = data[idx];
            int extendNum = 0;
            
            if(isTypeOne(num)) extendNum = 0;
            else if(isTypeTow(num)) extendNum = 1;
            else if(isTypeThree(num)) extendNum = 2;
            else if(isTypeFour(num)) extendNum = 3;
            else return false;
            
            idx++;
            while (extendNum > 0) {
                if(idx >= data.length) return false;
                num = data[idx];
                if(isExtend(num)) {
                    idx++;
                    extendNum--;
                } else {
                    return false;
                }
            }
        }
        
        return true;
    }
}

class Main{
    public static void main(String[] args) {
        int[] arr = new int[] {230,136,145};
        new Solution().validUtf8(arr);
    }
}