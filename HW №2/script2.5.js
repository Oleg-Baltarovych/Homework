let isAdult = prompt("Вкажіть будь ласка свій вік.");

if (isNaN(isAdult)) {
	alert("Введіть будь ласка числове значення!!!");
} else if (isAdult >= 18) {
	alert("Ви досягли поноліття.");
} else if (isAdult <= 10) {
	alert("Ви ще надто молоді.");
} else {
	alert("Вам менше 18.");
}
