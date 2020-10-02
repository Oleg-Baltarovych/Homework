let array = [2, 3, 4, 5];
let result = 1;
//Цикл for
for (let i = 0; i < array.length; i++) {
  result *= array[i];
}
console.log(result);
//Цикл while
let i = 0;
while (i < array.length) {
  result *= array[i];
  i++;
}
console.log(result);
