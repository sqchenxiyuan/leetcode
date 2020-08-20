class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
        }
        List<int[]> arr = new ArrayList<>();
        for(int num : map.keySet()){
            arr.add(new int[]{num, map.get(num)});
        }

        arr = buketSort(arr);
        int[] res = new int[k];
        for(int i = arr.size() - 1, j = 0; i >= 0 && j < k; j++, i--){
            res[j] = arr.get(i)[0];
        }
        return res;
    }

    private List<int[]> buketSort(List<int[]> arr){
        int max = arr.get(0)[1];
        int min = arr.get(0)[1];

        for(int i = 1; i < arr.size(); i++){
            max = Math.max(max, arr.get(i)[1]);
            min = Math.min(min, arr.get(i)[1]);
        }
        if(max == min) return arr;

        int buketCount = 10;
        int buketSize = (int)Math.ceil(((max * 1.0 - min * 1.0) ) / buketCount);
        List<List<int[]>> bukets = new ArrayList<>();
        for(int i = 0; i < buketCount; i++){
            bukets.add(new ArrayList<>());
        }

        for(int i = 0; i < arr.size(); i++){
            int[] data = arr.get(i);
            bukets.get((data[1] - min) / buketSize).add(data);
        }

        List<int[]> res = new ArrayList<>();
        for(int i = 0; i < buketCount; i++){
            List<int[]> buket = bukets.get(i);
            if(buket.size() == 0) continue;
            if(buket.size() > 1 && buketSize > 1){
                buket = buketSort(buket);
            }
            for(int[] r : buket){
                res.add(r);
            }
        }

        return res;
    }
}