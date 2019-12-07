public class Solution {

    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String, Map<String, Double>> map = new HashMap<String, Map<String,Double>>();
        
        for(int i = 0; i < equations.size(); i++) {
            List<String> arr = equations.get(i);
            double value = values[i];
            String up = arr.get(0);
            String down = arr.get(1);
            
            if(!map.containsKey(up)) map.put(up, new HashMap<String, Double>());
            map.get(up).put(down, value);
            
            if(!map.containsKey(down)) map.put(down, new HashMap<String, Double>());
            map.get(down).put(up, 1 / value);
        }
        
        double[] results = new double[queries.size()];
        
        for(int i = 0; i < queries.size(); i++) {
            List<String> arr = queries.get(i);
            String up = arr.get(0);
            String down = arr.get(1);
            
            if(!map.containsKey(up) || !map.containsKey(down)) results[i] = -1;
            else if(up.equals(down)) results[i] = 1;
            else {
                Double x = findResult(map, new HashSet<String>(), up, down);
                if(x != null) results[i] = x;
                else results[i] = -1;
            }
        }
        return results;
    }
    
    private Double findResult(Map<String, Map<String, Double>> map,Set<String> viewedSet,  String up, String down) {
        if(map.containsKey(up) && map.get(up).containsKey(down)) return map.get(up).get(down);
        if(viewedSet.contains(up)) return null;
        //下次遇到直接返回
        Set<String> downSets = map.get(up).keySet();
        Double result = null;
        viewedSet.add(up);
        for(String s : downSets) {
            Double x = findResult(map, viewedSet, s, down);
            if(x != null) {
                System.out.println(x + "|" + up + "|" + s);
                result = x * map.get(up).get(s);
                break;
            }
        }
        // map.get(up).put(down, result);
        return result;
    }
}
