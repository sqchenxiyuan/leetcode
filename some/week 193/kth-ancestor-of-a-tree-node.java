
import java.util.HashMap;
import java.util.Map;

class TreeAncestor {

    Map<Integer,Integer>[] maps; //i 的 2^j父节点

    public TreeAncestor(int n, int[] parent) {
        maps = new Map[n];
        for(int j = 0; j < n; j++){
            maps[j] = new HashMap<>();
        }
        for(int i = 0; ; i++){
            boolean allOk = true;
            for(int j = 0; j < n; j++){
                Map<Integer,Integer> map = maps[j];
                int data;
                if(i == 0) data = parent[j];
                else data = map.get(i - 1) == -1 ? -1 : maps[map.get(i - 1)].get(i - 1);
                if(data != -1) allOk = false;
                map.put(i, data);
            }
            if (allOk) break;
        }
    }

    public int getKthAncestor(int node, int k) {
        if(k == 0 || node == -1) return node;
        Map<Integer,Integer> map = maps[node];
        int num = k;
        int count = 0;
        while (num > 1){
            num = num>>1;
            count++;
        }

        if(!map.containsKey(count)) return -1;

        return getKthAncestor(map.get(count), k - (1 << count));
    }
}