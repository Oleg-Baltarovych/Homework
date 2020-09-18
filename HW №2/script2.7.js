let currentDate = new Date();
let currentHours = currentDate.getHours();
	console.log(currentHours);
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
switch (currentHours) {
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	console.log("Доброго ранку");
	break;
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	console.log("Доброго дня");
	break;
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
	case 23:
	console.log("Доброго вечора");
	break;
	default:
	console.log("Доброї ночі");
}