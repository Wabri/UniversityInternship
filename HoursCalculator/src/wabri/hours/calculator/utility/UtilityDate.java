package wabri.hours.calculator.utility;

public class UtilityDate {
	
	public static String getMonthFromInt(int i) {
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

}
