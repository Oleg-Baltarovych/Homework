function mapBuilder(keysArray, valuesArrays) {
	const myMap = new Map();
	for (let i = 0; i < keysArray.length; i++) {
		myMap.set(keysArray[i], valuesArrays[i]);
	}
	return myMap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"
