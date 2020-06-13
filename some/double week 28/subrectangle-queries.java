class History{
    int row1;
    int col1;
    int row2;
    int col2;
    int newValue;

    History(int row1, int col1, int row2, int col2, int newValue){
        this.row1 = row1;
        this.col1 = col1;
        this.row2 = row2;
        this.col2 = col2;
        this.newValue = newValue;
    }
}

public class SubrectangleQueries {

    private int[][] rectangle;

    public SubrectangleQueries(int[][] rectangle) {
        this.rectangle = rectangle;
    }

    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for(int i = row1; i <= row2; i++){
            for(int j = col1; j <= col2; j++){
                rectangle[i][j] = newValue;
            }
        }
    }

    public int getValue(int row, int col) {
        return rectangle[row][col];
    }
}
