public class AvgOfArray {
    public static void main(String[] args) {
        double[] arr = { 2, 3, 43, 65, 4.242, 54, 645, 231 };
        double average;
        double sum = 0.0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        average = sum / arr.length;
        System.out.println(average);

    }
}
