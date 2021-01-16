public class Hypotenuse {
    public static double hypo(double a, double b) {
        return Math.sqrt(a * a + b * b);
    }

    public static void main(String[] args) {
        System.out.println(hypo(1.2, 5.7));
    }
}
