function calcRectangleArea(width, height) {
	let S = width * height;
	if (width < 0 || height < 0) {
		throw new Error("Ви ввели некоректне значення.");
	} else if (isNaN(width) || isNaN(height)) {
		throw new Error("Ви ввели не числове значення.");
	}
	return S;
}
try {
	let result = calcRectangleArea("one", 9);
	console.log(result);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}