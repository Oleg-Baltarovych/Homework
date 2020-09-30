let currentDate = new Date();
let currentHours = currentDate.getHours();
// Використання умовного оператора if/else if/else.
if (currentHours > 5 && currentHours <= 11) {
	console.log("Доброго ранку");
} else if (currentHours > 11 && currentHours <= 17) {
	console.log("Доброго дня");
} else if (currentHours > 17 && currentHours <= 23) {
	console.log("Доброго вечора");
} else {
	console.log("Доброї ночі");
}
// Використання умовного оператора switch.
switch (true) {
	case currentHours > 5 && currentHours <= 11:
	console.log("Доброго ранку");
	break;
	case currentHours > 11 && currentHours <= 17:
	console.log("Доброго дня");
	break;
	case currentHours > 17 && currentHours <= 23:
	console.log("Доброго вечора");
	break;
	default:
	console.log("Доброї ночі");
}
