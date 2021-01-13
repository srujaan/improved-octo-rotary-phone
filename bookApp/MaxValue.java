public class MaxValue {
    public static void main(String[] args) {
        double[] a = { 1, 23, 4, 54, 45, 4.5 };
        double max = a[0];
        for (int i = 1; i < a.length; i++) {
            if (a[i] > max) max = a[i];
        }
        System.out.println(max);
    }
}
