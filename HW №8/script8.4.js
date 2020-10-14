function moveStr(str) {
	let result = str.replace(/(\w+)\s(\w+)/, '$2 $1');
	return result;
}
moveStr("Java Script");