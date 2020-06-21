import java.util.HashMap;
import java.util.Map;

public class Solution {
    Map<String, Integer> map = new HashMap<>();

    public String[] getFolderNames(String[] names) {
        String[] res = new String[names.length];
        for(int i = 0; i < names.length; i++){
            String baseName = names[i];
            if(map.containsKey(baseName)){ //存在
                String name;
                int n = map.get(baseName);
                do{
                    n++;
                    name = baseName + "(" + String.valueOf(n) + ")";
                } while (map.containsKey(name));
                map.put(baseName, n);
                res[i] = name;
                map.put(name, 0);
            } else {
                res[i] = baseName;
                map.put(baseName, 0);
            }

        }
        return res;
    }
}