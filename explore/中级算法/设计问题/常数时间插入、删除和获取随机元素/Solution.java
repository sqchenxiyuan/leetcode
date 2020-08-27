import java.util.*;

class RandomizedSet {

    Map<Integer, Integer> map = new HashMap<>();
    ArrayList<Integer> arr = new ArrayList<>();
    Random r = new Random();

    /** Initialize your data structure here. */
    public RandomizedSet() {

    }
    
    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    public boolean insert(int val) {
        if(map.containsKey(val)) return false;
        map.put(val, arr.size());
        arr.add(val);
        return true;
    }
    
    /** Removes a value from the set. Returns true if the set contained the specified element. */
    public boolean remove(int val) {
        if(!map.containsKey(val)) return false;
        int preIndex = map.remove(val);
        if(preIndex != arr.size() - 1){
            int lastNum = arr.get(arr.size() - 1);
            arr.set(preIndex, lastNum);
            map.put(lastNum, preIndex);
        }
        arr.remove(arr.size() - 1);
        return true;
    }
    
    /** Get a random element from the set. */
    public int getRandom() {
        return arr.get(r.nextInt(arr.size()));
    }
}
