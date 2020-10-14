function checkLogin(login) {
	let regExp = /^[A-Z][A-Z0-9.]{2,10}$/ig;
	let number = login.match(/[\d+\.\d+]+/g);
	console.log(number);
	let result = regExp.test(login);
	return result;
}
checkLogin('ee1.1ret3');