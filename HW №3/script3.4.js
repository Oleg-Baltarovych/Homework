let a = Math.round(prompt("Введіть ціле число."));
let b = Math.round(prompt("Введіть значення степеня."));
let result;
function raiseToDegree(a, b) {
	result = a ** b;
	return result;
}
alert("Результат піднесення до степеня: " + raiseToDegree(a , b));