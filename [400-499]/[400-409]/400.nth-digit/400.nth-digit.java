public class Solution {
    public int findNthDigit(int n) {
        long base = 1; //开始数
        long baseDN = 1; //当前数的长度 每组 base * baseDN * 9
        while (n > base * baseDN * 9) {
            n = (int) (n - base * baseDN * 9);
            base = base *10;
            baseDN++;
            System.out.println(base +"|"+ n);
        }
        long current = base + (n - 1) / baseDN;
        n = (int) ((n - 1) % baseDN);
        n = (int) (baseDN - 1 - n);
        System.out.println(current + "|" + n);
        while (n > 0) {
            n--;
            current = current / 10;
        }
        System.out.println(current + "|" + n);
        return (int) (current % 10);
    }
    
    public static void main(String[] args) {
        System.out.print(new Solution().findNthDigit(1000000000));
    }
}