public class Palindrome {
    // Returns the first character of the string str
    public static String firstCharacter(String str) {
        return str.substring(0, 1);
    }

    // Returns the last character of a string str
    public static String lastCharacter(String str) {
        return str.substring(str.length() - 1);
    }

    // Returns the string that results from removing the first
    public static String middleCharacters(String str) {
        return str.substring(1, str.length() - 1);
    }

    public static boolean isPalindrome(String x) {
        // base case 1
        if (x.length() == 0 || x.length() == 1) return true;
        // base case 2
        if (!firstCharacter(x).equals(lastCharacter(x))) return false;
        return isPalindrome(middleCharacters(x));
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("hello"));
    }
}
