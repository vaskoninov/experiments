public class Methods {
    public static void main(String[] args) {
        int[] newInts = {1,2,3};
        System.out.println(calcSum(newInts));
    }
    static int calcSum(int[] ints) {
        int result = 0;
        for (int inte: ints) {
            result += inte;
        }
        return result;
    }
}
