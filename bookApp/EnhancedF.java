public class EnhancedF {
    public static int enhancedF(int n, int[] arr) {
        // base cases
        if (n == 0) return arr[0];
        if (n == 1) return arr[1];

        for (int i = 2; i <= n; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
        }
        return arr[n];
    }

    public static void main(String[] args) {
        for (int n = 0; n < 100; n++) {
            int[] arr;

            if (n == 0 || n == 1) arr = new int[2];
            else arr = new int[n + 1];

            arr[0] = 0;
            arr[1] = 1;
            StdOut.println(n + " - " + enhancedF(n, arr));
        }
    }
}
