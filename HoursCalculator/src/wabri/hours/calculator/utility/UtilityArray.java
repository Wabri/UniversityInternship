package wabri.hours.calculator.utility;

public class UtilityArray {

	public static void newArray(Double[][] array, int firstIndex, int secondIndex, double initializer) {
		for (int j = 0; j < secondIndex; j++) {
			for (int i = 0; i < firstIndex; i++) {
				array[i][j] = initializer;
			}
		}
	}

}
