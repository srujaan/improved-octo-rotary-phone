public class Strings {
    public static void main(String[] args) {
        System.out.println(1 + 2); // 3
        // concatenation
        System.out.println("Hi, " + "Bob"); // Hi, Bob
        // type conversion
        String str = Integer.toString(20); // str to integer
        System.out.println(str);
        System.out.println(str.getClass().getName());
        // integer to string
        int number = Integer.parseInt("20");
        if (number % 1 == 0) {
            System.out.println(number + " is an integer type");
        }
        // Automatic type conversion
        System.out.println("The square root of 4 is " + Math.sqrt(4));
        System.out.println(4); // normal integer
        System.out.println(4 + ""); // integer is converted to string by concatenation
    }
}
