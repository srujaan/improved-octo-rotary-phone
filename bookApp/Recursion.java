public class Recursion {
    public static int factorial(int x) {
        // base case
        if (x == 0) return 1;
        return factorial(x - 1) * x;
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}
