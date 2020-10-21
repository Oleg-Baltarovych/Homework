function mul(...value) {
	let sum = 0;
	for (let i = 0; i < value.length; i++) {
		if (typeof value[i] === `number`) {
			sum += value[i];
		}
	}
	return sum;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
