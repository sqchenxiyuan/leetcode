import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Consumer;

class People {
    public int height;
    public int k;
    
    People(int height, int k){
        this.height = height;
        this.k = k;
    }
}

public class Solution {
    public int[][] reconstructQueue(int[][] people) {
        
        List<People> arr = new ArrayList<>();
        for(int[] p : people) {
            arr.add(new People(p[0], p[1]));
        }
        arr.sort(new Comparator<People>() {
            @Override
            public int compare(People o1, People o2) {
                if(o1.height == o2.height) return o1.k - o2.k;
                return o2.height - o1.height;
            }
        });
        
        List<People> arr2 = new ArrayList<>();
        arr.forEach(new Consumer<People>(){
            @Override
            public void accept(People t) {
                arr2.add(t.k, t);
            }
        });
        
        int[][] result = new int[people.length][];
        for(int i = 0; i < people.length; i++) {
            People p = arr2.get(i);
            result[i] = new int[] {p.height, p.k};
        }
        
        return result;
    }
}
