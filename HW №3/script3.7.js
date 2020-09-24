let result;
function lastElem(arr, xElem = 1) {
	result = arr.slice((arr.length - xElem), arr.length);
	return result;
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5],2));
console.log(lastElem([3, 4, 10, -5],8));