package wabri.hours.calculator.utility;

import java.io.BufferedReader;
import java.io.IOException;

public class UtilityFile {

	public static void jumpToLine(BufferedReader bufferedReader, int jump) throws IOException {
		for (int i = 0; i < jump; i++) {
			bufferedReader.readLine();
		}
	}

}
