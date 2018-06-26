package wabri.hours.calculator;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class HoursCalculator {

	public static void main(String[] args) {

		String fileName = args[0];
		Double totalHours = new Double(0);
		int totalDays = 0;
		String lastDay = new String("");

		try (FileReader reader = new FileReader(fileName)) {
			BufferedReader bufferedReader = new BufferedReader(reader);
			String line;

			bufferedReader.readLine();
			bufferedReader.readLine();
			bufferedReader.readLine();

			while ((line = bufferedReader.readLine()) != null) {
				if (line.startsWith("##")) {
					System.out.println(line);
					totalHours += Integer.parseInt(String.valueOf(line.charAt(23)));
					if (line.charAt(24) == ',') {
						totalHours += 0.1 * Integer.parseInt(String.valueOf(line.charAt(25)));
					}
					totalDays++;
					lastDay = line.substring(11, 19);
				}
			}

			System.out.println("totale ore " + totalHours);
			System.out.println("totale days " + totalDays);

			reader.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			FileWriter writer = new FileWriter("totalDayHours.md", false);
			writer.write("## Totale ore e giorni calcolati con HoursCalculator");
			writer.write("\r\n");
			writer.write("#### Totale ore: " + totalHours);
			writer.write("\r\n");
			writer.write("#### Totale giorni: " + totalDays);
			writer.write("\r\n");
			writer.write("#### Ultimo aggiornamento: " + lastDay);
			writer.write("\r\n");
			writer.write("<!-- Per aggiornare eseguire il jar HoursCalculator.jar -->");
			writer.write("\r\n");
			writer.close();
		} catch (IOException e) {
			// TODO: handle exception
		}

	}

}
