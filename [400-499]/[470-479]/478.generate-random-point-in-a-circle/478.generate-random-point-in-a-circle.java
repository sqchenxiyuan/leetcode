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
        double o = 2 * Math.PI * Math.random();
        double r = Math.sqrt(Math.random()) * radius; //使用sqrt使得分布均匀 https://leetcode.com/problems/generate-random-point-in-a-circle/discuss/155650/Explanation-with-Graphs-why-using-Math.sqrt()
        return new double[]{ x_center + r * Math.cos(o), y_center + r * Math.sin(o) };
    }
}
/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(radius, x_center, y_center);
 * double[] param_1 = obj.randPoint();
 */
// @lc code=end

