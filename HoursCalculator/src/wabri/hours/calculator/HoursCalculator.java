package wabri.hours.calculator;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class HoursCalculator {

	private String fileName;
	private int firstMonth;
	private int lastMonth;

	public HoursCalculator(String fileName, int firstMonth, int lastMonth) {
		this.fileName = fileName;
		this.firstMonth = firstMonth;
		this.lastMonth = lastMonth;
	}

	public void run() {
		Double totalHours = new Double(0);
		int totalDays = 0;
		Double totalHoursPerMonth[][] = new Double[12][2];
		String lastDay = new String("");

		for (int i = 0; i < totalHoursPerMonth.length; i++) {
			totalHoursPerMonth[i][0] = 0.0;
			totalHoursPerMonth[i][1] = 0.0;
		}

		try (FileReader reader = new FileReader(fileName)) {
			BufferedReader bufferedReader = new BufferedReader(reader);
			String line;

			bufferedReader.readLine();
			bufferedReader.readLine();
			bufferedReader.readLine();

			while ((line = bufferedReader.readLine()) != null) {
				if (line.startsWith("##")) {
					double actualDayHours = Integer.parseInt(String.valueOf(line.charAt(23)));
					if (line.charAt(24) == ',') {
						actualDayHours += 0.1 * Integer.parseInt(String.valueOf(line.charAt(25)));
					}
					if (Integer.parseInt(String.valueOf(line.charAt(14))) == 1) {
						totalHoursPerMonth[Integer.parseInt(1 + String.valueOf(line.charAt(15)))][0] += actualDayHours;
						totalHoursPerMonth[Integer.parseInt(1 + String.valueOf(line.charAt(15)))][1]++;
					} else {
						totalHoursPerMonth[Integer.parseInt(0 + String.valueOf(line.charAt(15)))][0] += actualDayHours;
						totalHoursPerMonth[Integer.parseInt(0 + String.valueOf(line.charAt(15)))][1]++;
					}
					totalHours += actualDayHours;
					totalDays++;
					lastDay = line.substring(11, 19);
				}
			}

			reader.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			FileWriter writer = new FileWriter("totalDaysHours.md", false);
			writer.write("## Totale ore e giorni di tirocinio");
			writer.write("\n\r");
			writer.write("| Mese | Ore | Giorni  |\r\n" + "| ------------- |:-------------:| -----:|\r\n");
			for (int i = firstMonth; i <= lastMonth; i++) {
				writer.write("| " + getMonthFromInt(i) + " | " + totalHoursPerMonth[i][0] + "| "
						+ (int) Math.round(totalHoursPerMonth[i][1]) + "| \r\n");
			}
			writer.write("| Totale | " + totalHours + "| " + totalDays + "| \r\n");
			writer.write("\r\n");
			writer.write("#### Ultimo aggiornamento: " + lastDay);
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

	private String getMonthFromInt(int i) {
		switch (i) {
		case 1:
			return "Gennaio";
		case 2:
			return "Febbraio";
		case 3:
			return "Marzo";
		case 4:
			return "Aprile";
		case 5:
			return "Maggio";
		case 6:
			return "Giugno";
		case 7:
			return "Luglio";
		case 8:
			return "Agosto";
		case 9:
			return "Settembre";
		case 10:
			return "Ottobre";
		case 11:
			return "Novembre";
		case 12:
			return "Dicembre";
		default:
			break;
		}
		return null;
	}

	public static void main(String[] args) {
		HoursCalculator hoursCalculator = new HoursCalculator(args[0], Integer.parseInt(args[1]),
				Integer.parseInt(args[2]));
		hoursCalculator.run();
	}

}
