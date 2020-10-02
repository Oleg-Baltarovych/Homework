function findUnique(arr) {
  let x = arr.length;
  for (let i = 0; i < x - 1; i++) {
    for (let j = i + 1; j < x; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
