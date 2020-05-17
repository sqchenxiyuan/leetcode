public class Solution {
    public int numPoints(int[][] points, int r) {
        int l = points.length;
        int max = 1;
        for(int i = 0; i < l; i++){
            double[] pi = new double[]{points[i][0], points[i][1]};
            for(int j = i + 1; j < l; j++){
                double[] pj = new double[]{points[j][0], points[j][1]};
                double d = distance(pi, pj);
                if(d > 2 * r) continue;

                double[] c = new double[]{(pi[0] + pj[0]) / 2.0, (pi[1] + pj[1]) / 2.0}; //两个线的中心点，
                double z = Math.sqrt(r * r - (d * d) / 4);


                double[] c1;
                double[] c2;
                if(pi[0] == pj[0]){ //垂直
                    c1 = new double[]{c[0] + z, c[1]};
                    c2 = new double[]{c[0] - z, c[1]};
                } if(pi[1] == pj[1]){ //垂直
                    c1 = new double[]{c[0], c[1] + z};
                    c2 = new double[]{c[0], c[1] - z};
                } else {
                    double k = (pj[1] - pi[1]) / (pj[0] - pi[0]);
                    k = -1/k;
                    double tan = 1 / Math.sqrt(1 + k * k);
                    c1 = new double[]{c[0] + z * tan, c[1] + z * k * tan};
                    c2 = new double[]{c[0] - z * tan, c[1] - z * k * tan};
                }

                int count1 = 0;
                int count2 = 0;
                for(int q = 0; q < l; q++){
                    double[] pq = new double[]{points[q][0], points[q][1]};
                    if(distance(pq, c1) <= r){
                        count1++;
                    }
                    if(distance(pq, c2) <= r){
                        count2++;
                    }
                }

                max = Math.max(max, Math.max(count1, count2));
                if(count1 == 0){
                    System.out.println("====>" + count1);
                }
            }
        }
        return max;
    }

    private double distance(double[] p1, double[] p2){
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    }
}
