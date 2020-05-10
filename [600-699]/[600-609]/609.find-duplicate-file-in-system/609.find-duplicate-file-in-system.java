/*
 * @lc app=leetcode.cn id=609 lang=java
 *
 * [609] 在系统中查找重复文件
 */

// @lc code=start
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Solution {
    private static Pattern p = Pattern.compile("([a-zA-Z0-9\\.]*)\\(([a-zA-Z0-9]*)\\)");

    public List<List<String>> findDuplicate(String[] paths) {
        Map<String, Set<String>> map = new HashMap<>();

        for(String path : paths){
            String[] arr = path.trim().split(" ");
            String dir = arr[0];
            for(int i = 1; i < arr.length; i++){
                Matcher m = p.matcher(arr[i]);
                m.matches();
                String name = m.group(1);
                String content = m.group(2);

                if(!map.containsKey(content)){
                    map.put(content, new HashSet<>());
                }

                map.get(content).add(dir + "/" + name);
            }
        }

        List<List<String>> res = new ArrayList<>();

        for(Set set : map.values()){
            if(set.size() > 1){
                res.add(new ArrayList<>(set));
            }
        }

        return res;
    }
}
// @lc code=end

