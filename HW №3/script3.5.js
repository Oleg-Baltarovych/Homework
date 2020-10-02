function findMin() {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }
  return min;
}
findMin(3, 5, -99, 20, -1, 30, 17, 2, 68, -4);
