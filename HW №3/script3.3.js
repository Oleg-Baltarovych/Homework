function randArray(k) {
  let array = [];
  for (let i = 0; i < k; i++) {
    array[i] = Math.ceil(Math.random() * 500);
  }
  return array;
}
randArray(6);
