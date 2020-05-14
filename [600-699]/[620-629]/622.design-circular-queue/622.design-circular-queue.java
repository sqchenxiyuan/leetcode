/*
 * @lc app=leetcode.cn id=622 lang=java
 *
 * [622] 设计循环队列
 */

// @lc code=start
public class MyCircularQueue {

    private int[] arr;
    private int headIndex;
    private int len;
    private int k;

    /** Initialize your data structure here. Set the size of the queue to be k. */
    public MyCircularQueue(int _k) {
        k = _k;
        arr = new int[k];
    }

    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public boolean enQueue(int value) {
        if(isFull()) return false;
        int nextIndex = (headIndex + len) % k;
        arr[nextIndex] = value;
        len++;
        return true;
    }

    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public boolean deQueue() {
        if(isEmpty()) return false;
        headIndex = (headIndex + 1) % k;
        len--;
        return true;
    }

    /** Get the front item from the queue. */
    public int Front() {
        if(isEmpty()) return -1;
        return arr[headIndex];
    }

    /** Get the last item from the queue. */
    public int Rear() {
        if(isEmpty()) return -1;
        return arr[(headIndex + len - 1) % k];
    }

    /** Checks whether the circular queue is empty or not. */
    public boolean isEmpty() {
        return len == 0;
    }

    /** Checks whether the circular queue is full or not. */
    public boolean isFull() {
        return len == k;
    }
}
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */
// @lc code=end

