function valid(number) {
	let str = number.match(/[0-9]+/g);
	str = str.join('');
	let regExp = /[0-9]{16}/g;
	let result = regExp.test(str);
	return result;
}
valid("9999-9999-9999-9999");