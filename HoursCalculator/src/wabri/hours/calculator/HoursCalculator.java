package wabri.hours.calculator;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import wabri.hours.calculator.utility.UtilityArray;
import wabri.hours.calculator.utility.UtilityDate;
import wabri.hours.calculator.utility.UtilityFile;

public class HoursCalculator {

	private String fileNameInput;
	private String fileNameOutput;
	private int firstMonth;
	private int lastMonth;

	public HoursCalculator(String fileNameInput, String fileNameOutput, int firstMonth, int lastMonth) {
		this.fileNameInput = fileNameInput;
		this.fileNameOutput = fileNameOutput;
		this.firstMonth = firstMonth;
		this.lastMonth = lastMonth;
	}

	public void run() {
		HoursCalculatorDataReader hoursCalculatorDataReader = new HoursCalculatorDataReader(new Double(0), 0,
				new Double[12][2], new String(""));
		UtilityArray.newArray(hoursCalculatorDataReader.getTotalHoursPerMonth(), 12, 2, 0.0);

		try (FileReader reader = new FileReader(fileNameInput)) {
			BufferedReader bufferedReader = new BufferedReader(reader);
			String line;
			UtilityFile.jumpToLine(bufferedReader, 3);
			while ((line = bufferedReader.readLine()) != null) {
				if (line.startsWith("##")) {
					double actualDayHours = Integer.parseInt(String.valueOf(line.charAt(23)));
					if (line.charAt(24) == ',') {
						actualDayHours += 0.1 * Integer.parseInt(String.valueOf(line.charAt(25)));
					}
					int indexMonth = getIndexMonth(line);
					hoursCalculatorDataReader.addTotalHoursPerMonth(indexMonth, 0, actualDayHours);
					hoursCalculatorDataReader.addTotalHoursPerMonth(indexMonth, 1, 1);
					hoursCalculatorDataReader.addTotalHours(actualDayHours);
					hoursCalculatorDataReader.addTotalDays(1);
					hoursCalculatorDataReader.setLastDay(line.substring(11, 19));
				}
			}
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			FileWriter writer = new FileWriter(fileNameOutput, false);
			writer.write("## Totale ore e giorni di tirocinio");
			writer.write("\n\r");
			writer.write("| Mese | Ore | Giorni  |\r\n" + "| ------------- |:-------------:| -----:|\r\n");
			for (int i = firstMonth; i < lastMonth; i++) {
				writer.write("| " + UtilityDate.getMonthFromInt(i) + " | "
						+ hoursCalculatorDataReader.getTotalHoursPerMonth()[i][0] + "| "
						+ (int) Math.round(hoursCalculatorDataReader.getTotalHoursPerMonth()[i][1]) + "| \r\n");
			}
			writer.write("| Totale | " + hoursCalculatorDataReader.getTotalHours() + "| "
					+ hoursCalculatorDataReader.getTotalDays() + "| \r\n");
			writer.write("\r\n");
			writer.write("#### Ultimo aggiornamento: " + hoursCalculatorDataReader.getLastDay());
			writer.write("\r\n");
			writer.write("<!-- Per aggiornare eseguire il jar HoursCalculator.jar -->");
			writer.write("\r\n");
			writer.write("*Questo file è autogenerato da HoursCalculator*");
			writer.write("\r\n");
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private int getIndexMonth(String line) {
		return (Integer.parseInt(String.valueOf(line.charAt(14))) == 1)
				? Integer.parseInt(1 + String.valueOf(line.charAt(15)))
				: Integer.parseInt(0 + String.valueOf(line.charAt(15)));
	}

	private void readFileInput(FileReader reader) {

	}

	public static void main(String[] args) {
		HoursCalculator hoursCalculator = new HoursCalculator(args[0], args[1], Integer.parseInt(args[2]),
				Integer.parseInt(args[3]));
		hoursCalculator.run();
	}

}
