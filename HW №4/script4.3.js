function checkAge() {
	let age = prompt("Введіть свій вік.");
	if (age == "") {
		throw new Error("Поле пусте. Будь ласка вкажіть ваш вік.");
	} else if (isNaN(age)) {
		throw new Error("Введіть числове значення.");
	} else if (age <= 14) {
		throw new Error("Ви ще надто молодий");
	} else {
		return true;
	}
}
try {
	let result = checkAge();
	alert(result);
} catch (error) {
	alert(error.name);
	alert(error.message);
}