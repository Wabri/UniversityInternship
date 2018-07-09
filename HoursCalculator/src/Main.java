import wabri.hours.calculator.HoursCalculator;

public class Main {

	public static void main(String[] args) {
		HoursCalculator hoursCalculator = new HoursCalculator(args[0], args[1], Integer.parseInt(args[2]),
				Integer.parseInt(args[3]));
		hoursCalculator.run();
	}

}
