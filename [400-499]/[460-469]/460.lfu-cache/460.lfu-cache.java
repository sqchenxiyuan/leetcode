/*
 * @lc app=leetcode id=460 lang=java
 *
 * [460] LFU Cache
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

class ValueNode{
    public int key;
    public int val;
    public int viewCount;

    public ValueNode prev;
    public ValueNode next;
}

class LFUCache {

    int maxSize; //最大数目
    int size = 0; //目前数目
    int minCount = Integer.MAX_VALUE; //目前的最小访问次数

    Map<Integer, ValueNode> numMap = new HashMap<>(); //每个数字的地方

    Map<Integer, ValueNode> countStartMap = new HashMap<>(); //每个数字的访问次数列表开头
    Map<Integer, ValueNode> countEndMap = new HashMap<>(); //每个数字的访问次数列表结尾

    public LFUCache(int capacity) {
        maxSize = capacity;
    }

    public int get(int key) {
        if(maxSize < 1) return -1;
        if(!numMap.containsKey(key)) return -1;
        ValueNode node = numMap.get(key);
        updateCount(node);
        return node.val;
    }

    public void put(int key, int value) {
        if(maxSize < 1) return;
        if(numMap.containsKey(key)){
            ValueNode node = numMap.get(key);
            node.val = value;
            updateCount(node);
        } else {
            if(size == maxSize){
                deleteOne();
            }
            append(key, value);
        }
    }

    private void append(int key, int value){
        ValueNode node = new ValueNode();
        node.key = key;
        node.val = value;
        node.viewCount = 0;
        numMap.put(key, node);
        updateCount(node);
        size++;
    }

    private void updateCount(ValueNode node){
        int preCount = node.viewCount;
        int nextCount = preCount + 1;
        node.viewCount = nextCount;

        //需要插入的列表是否存在
        if(!countStartMap.containsKey(nextCount)){
            ValueNode start = new ValueNode();
            ValueNode end = new ValueNode();
            start.next = end;
            end.prev = start;
            countStartMap.put(nextCount, start);
            countEndMap.put(nextCount, end);
        }

        //恢复之前的列表
        ValueNode nodePreNode = node.prev;
        ValueNode nodeNextNode = node.next;
        if(nodePreNode != null){
            nodePreNode.next = nodeNextNode;
            nodeNextNode.prev = nodePreNode;
        }

        //插入新的列表
        ValueNode end = countEndMap.get(nextCount);
        ValueNode prev = end.prev;
        prev.next = node;
        node.next = end;
        node.prev = prev;
        end.prev = node;

        //更新最小freq
        if(minCount == preCount){
            if(countStartMap.get(minCount).next == countEndMap.get(minCount)){
                minCount = nextCount;
            }
        } else if(nextCount < minCount){
            minCount = nextCount;
        }
    }

    private void deleteOne(){
        ValueNode node = countStartMap.get(minCount).next;
        int key = node.key;
        ValueNode prevNode = node.prev;
        ValueNode nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        numMap.remove(key);
        size--;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * LFUCache obj = new LFUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
// @lc code=end

