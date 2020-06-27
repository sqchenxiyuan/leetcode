class Solution {
    public double average(int[] salary) {
        int max = salary[0];
        int min = salary[0];
        double sum = 0;
        for(int num : salary){
            sum+=num;
            max = Math.max(max, num);
            min = Math.min(min, num);
        }
        sum-=max;
        sum-=min;
        return sum / (salary.length - 2);
    }
}