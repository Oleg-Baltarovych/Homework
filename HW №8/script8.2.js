function checkEmail(email) {
	let regExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	let result = regExp.test(email);
	return result;
}
checkEmail("Qmail2@gmail.com");