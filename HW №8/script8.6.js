function checkEmail(email) {
	let regExp = /^[A-Z0-9]\w+@[A-Z0-9]+.[A-Z]{2,4}$/ig;
	let result = regExp.test(email);
	if (result) {
		console.log("Email is correct!");
	} else {
		console.log("Email is uncorrect!");
	}
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');