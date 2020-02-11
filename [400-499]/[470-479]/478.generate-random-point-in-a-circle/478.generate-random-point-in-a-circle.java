/*
 * @lc app=leetcode id=478 lang=java
 *
 * [478] Generate Random Point in a Circle
 */

// @lc code=start
public class Solution {
    private double radius;
    private double x_center;
    private double y_center;

    public Solution(double radius, double x_center, double y_center) {
        this.radius = radius;
        this.x_center = x_center;
        this.y_center = y_center;
    }

    public double[] randPoint() {
        double r = 2 * Math.PI * Math.random();
        return new double[]{ x_center + radius * Math.cos(r), y_center + radius * Math.cos(r) };
    }
}
/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(radius, x_center, y_center);
 * double[] param_1 = obj.randPoint();
 */
// @lc code=end

