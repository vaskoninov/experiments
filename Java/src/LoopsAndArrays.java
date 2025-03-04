import java.util.Arrays;

public class LoopsAndArrays {
    public static void main(String[] args) {
        int i = 0;

//        while (i < 10) {
//            System.out.println(i);
//            i++;
//        }
//
//        do {
//            System.out.println(i);
//            --i;
//        } while (i != 0);

/*        for (int j = 9; j >= i; j--) {
            System.out.println(i);
            i++;
        }*/

/*
        double[] newArray = new double[5];

        for (int j = 0; j < newArray.length; j++) {
            newArray[j] = j;
            System.out.println(newArray[j]);
        }
        System.out.println(Arrays.toString(newArray));
*/

        int[] newInts = {1, 2, 3, 4};

        System.out.println(Arrays.toString(newInts));

        for (int inte : newInts) {
            System.out.println(inte + inte * 2 );
        }

    }
}
