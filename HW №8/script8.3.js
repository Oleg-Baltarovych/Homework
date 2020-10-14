function checkStr(str) {
	let regExp = /d(b*)(d)/i;
	let result = regExp.exec(str);
	return result;
}
checkStr("cdbBdbsbz");