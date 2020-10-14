let str = "RegExp";
function checkUpper() {
	let regExp = /^[A-Z]/;
	let result = regExp.test(str);

	if(result) {
		console.log("String's starts with uppercase character!");
	} else {
		console.log("String's not starts with uppercase character!");
	}
}
checkUpper();