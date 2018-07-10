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

	public void run() throws IOException {
		HoursCalculatorDataRead hoursCalculatorDataReader = new HoursCalculatorDataRead(new Double(0), 0,
				new Double[12][2], new String(""));
		UtilityArray.newArray(hoursCalculatorDataReader.getTotalHoursPerMonth(), 12, 2, 0.0);

		FileReader fileReader = new FileReader(fileNameInput);
		this.readFileInput(fileReader, hoursCalculatorDataReader);
		fileReader.close();

		fileReader = new FileReader(fileNameInput);
		String bufferStringFile = createHCTableInFile(hoursCalculatorDataReader, fileReader);
		fileReader.close();

		FileWriter fileWriter = new FileWriter(fileNameOutput, false);
		fileWriter.write(bufferStringFile);
		fileWriter.close();
	}

	private String createHCTableInFile(HoursCalculatorDataRead hoursCalculatorDataReader, FileReader fileReader)
			throws IOException {
		BufferedReader bufferedReader = new BufferedReader(fileReader);
		String bufferStringFile = "";
		String line;
		while (!(line = bufferedReader.readLine()).equals("<!-- HC.jar start -->")) {
			bufferStringFile += line + "\r\n";
		}
		bufferStringFile = generateTableOfHoursDate(hoursCalculatorDataReader, bufferStringFile);
		while (!(line = bufferedReader.readLine()).equals("<!-- HC.jar end -->")) {
			
		}

		while ((line = bufferedReader.readLine()) != null) {
			bufferStringFile += line + "\r\n";
		}
		return bufferStringFile;
	}

	private String generateTableOfHoursDate(HoursCalculatorDataRead hoursCalculatorDataReader,
			String bufferStringFile) {
		bufferStringFile += "<!-- HC.jar start -->" + "\r\n";
		bufferStringFile += "## Totale ore e giorni di tirocinio" + "\r\n";
		bufferStringFile += "| Mese | Ore | Giorni  |\r\n" + "| ------------- |:-------------:| -----:|\r\n";
		for (int i = firstMonth - 1; i < lastMonth; i++) {
			bufferStringFile += ("| " + UtilityDate.getMonthFromInt(i + 1) + " | "
					+ hoursCalculatorDataReader.getTotalHoursPerMonth()[i][0] + "| "
					+ (int) Math.round(hoursCalculatorDataReader.getTotalHoursPerMonth()[i][1]) + "| \r\n");
		}
		bufferStringFile += ("| Totale | " + hoursCalculatorDataReader.getTotalHours() + "| "
				+ hoursCalculatorDataReader.getTotalDays() + "| \r\n");
		bufferStringFile += ("\r\n");
		bufferStringFile += ("#### Ultimo aggiornamento: " + hoursCalculatorDataReader.getLastDay());
		bufferStringFile += ("\r\n") + ("*Questa tabella è autogenerata da HoursCalculator*") + ("\r\n");
		bufferStringFile += "<!-- HC.jar end -->" + "\r\n";
		return bufferStringFile;
	}

	private void readFileInput(FileReader reader, HoursCalculatorDataRead hoursCalculatorDataReader)
			throws IOException {
		BufferedReader bufferedReader = new BufferedReader(reader);
		String line;
		while ((line = bufferedReader.readLine()) != null) {
			if (line.startsWith("## Day")) {
				double actualDayHours = Integer.parseInt(String.valueOf(line.charAt(23)));
				if (line.charAt(24) == ',') {
					actualDayHours += 0.1 * Integer.parseInt(String.valueOf(line.charAt(25)));
				}
				int indexMonth = getIndexMonth(line);
				hoursCalculatorDataReader.addTotalHoursPerMonth(indexMonth - 1, 0, actualDayHours);
				hoursCalculatorDataReader.addTotalHoursPerMonth(indexMonth - 1, 1, 1);
				hoursCalculatorDataReader.addTotalHours(actualDayHours);
				hoursCalculatorDataReader.addTotalDays(1);
				hoursCalculatorDataReader.setLastDay(line.substring(11, 19));
			}
		}
	}

	private int getIndexMonth(String line) {
		return (Integer.parseInt(String.valueOf(line.charAt(14))) == 1)
				? Integer.parseInt(1 + String.valueOf(line.charAt(15)))
				: Integer.parseInt(0 + String.valueOf(line.charAt(15)));
	}

	public static void main(String[] args) {
		HoursCalculator hoursCalculator = new HoursCalculator(args[0], args[1], Integer.parseInt(args[2]),
				Integer.parseInt(args[3]));
		try {
			hoursCalculator.run();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
