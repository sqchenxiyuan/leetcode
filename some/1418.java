import java.util.*;


class Table{
    int number = 0;
    Map<String, Integer> foods = new HashMap<>();
}

public class Solution {

    public List<List<String>> displayTable(List<List<String>> orders) {
        Set<String> foods = new HashSet<>();
        Map<Integer, Table> tables = new HashMap<>();

        for(List<String> order : orders){
            Table table;
            int tableNumber = Integer.valueOf(order.get(1));
            String food = order.get(2);
            if(tables.containsKey(tableNumber)){
                table = tables.get(tableNumber);
            } else {
                table = new Table();
                table.number = tableNumber;
                tables.put(tableNumber, table);
            }
            table.foods.put(food, table.foods.getOrDefault(food, 0) + 1);
            foods.add(food);
        }

        List<String> foodLine = new ArrayList<>(foods);
        foodLine.sort(new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.compareTo(s2);
            }
        });

        List<List<String>> result = new ArrayList<>();
        //首行
        List<String> first = new ArrayList<>();
        first.add("Table");
        first.addAll(foodLine);
        result.add(first);

        List<Integer> tableIndexs = new ArrayList<>(tables.keySet());
        tableIndexs.sort(new Comparator<Integer>() {
            @Override
            public int compare(Integer t1, Integer t2) {
                return t1 - t2;
            }
        });

        for(int key : tableIndexs){
            List<String> line = new ArrayList<>();
            line.add(String.valueOf(key));
            Table table = tables.get(key);

            for(String food : foodLine){
                line.add(String.valueOf(table.foods.getOrDefault(food, 0)));
            }

            result.add(line);
        }

        return result;
    }
}
