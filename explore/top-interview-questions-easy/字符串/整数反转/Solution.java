    public int reverse(int x) {
        boolean isNegative = false;
        if(x < 0) {
            x = -x;
            isNegative = true;
        }

        long num = 0;
        while(x > 0){
            int d = x % 10;
            
            num = num * 10 + d;
            x = x / 10;
        }
        if(isNegative){
            num = -num;
            if(num < Integer.MIN_VALUE) return 0;
        } else {
            if(num > Integer.MAX_VALUE) return 0;
        }
        return (int)num;
    }
}