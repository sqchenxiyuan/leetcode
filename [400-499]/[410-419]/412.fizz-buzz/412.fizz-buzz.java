import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> fizzBuzz(int n) {
        ArrayList<String> results = new ArrayList<>();
        for(int i = 1;i <= n; i++){
            if(i % 3 == 0 && i % 5 == 0){
                results.add("FizzBuzz");
            } else if(i % 3 == 0){
                results.add("Fizz");
            } else if(i % 5 == 0){
                results.add("Buzz");
            } else {
                results.add(String.valueOf(i));
            }
        }

        return results;
    }
}