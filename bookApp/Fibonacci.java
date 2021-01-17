public class Fibonacci {
    public static long f(int N) {
        // base cases
        if (N == 0) return 0;
        if (N == 1) return 1;
        return f(N - 1) + f(N - 2);
    }

    public static void main(String[] args) {
        for (int N = 0; N <= 30; N++) {
            StdOut.println(N + " " + f(N));
        }
    }
}
