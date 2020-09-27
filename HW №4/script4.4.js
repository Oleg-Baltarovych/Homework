class MonthException {
	constructor(message) {
		this.name = "MonthException";
	}
}
function showMonthName(month) {
	let monthNames = ["January", "February", "March", "April", "May",
	"June", "July", "August", "September", "October", "November", "December"];
	if (isNaN(month)) {
		throw new MonthException;
	} else if (month > 12 || month <= 0) {
		throw new MonthException;
	}
	let result = monthNames[--month];
	return result;
}
try {
	let res = showMonthName(10);
	console.log(res);
} catch (error) {
	console.log(error.name + " Incorrect month number");
}
