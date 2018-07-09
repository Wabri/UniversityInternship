package wabri.hours.calculator;

public class HoursCalculatorDataReader {

	private Double totalHours;
	private int totalDays;
	private Double[][] totalHoursPerMonth;
	private String lastDay;

	public HoursCalculatorDataReader(Double totalHours, int totalDays, Double[][] totalHoursPerMonth, String lastDay) {
		this.totalHours = totalHours;
		this.totalDays = totalDays;
		this.totalHoursPerMonth = totalHoursPerMonth;
		this.lastDay = lastDay;
	}

	public Double getTotalHours() {
		return totalHours;
	}

	public void setTotalHours(Double totalHours) {
		this.totalHours = totalHours;
	}

	public int getTotalDays() {
		return totalDays;
	}

	public void setTotalDays(int totalDays) {
		this.totalDays = totalDays;
	}

	public Double[][] getTotalHoursPerMonth() {
		return totalHoursPerMonth;
	}

	public void setTotalHoursPerMonth(Double[][] totalHoursPerMonth) {
		this.totalHoursPerMonth = totalHoursPerMonth;
	}

	public String getLastDay() {
		return lastDay;
	}

	public void setLastDay(String lastDay) {
		this.lastDay = lastDay;
	}

	public void addTotalHoursPerMonth(int indexMonth, int i, double actualDayHours) {
		this.totalHoursPerMonth[indexMonth][i] += actualDayHours;
	}

	public void addTotalHours(double actualDayHours) {
		this.totalHours += actualDayHours;
	}

	public void addTotalDays(int i) {
		this.totalDays += i;
	}

}