let newArray = [];
newArray[0] = 20;
newArray[1] = "String";
newArray[2] = true;
newArray[3] = null;
alert(newArray.length);
newArray[4] = prompt("Введіть будь яке значення.");
alert("П'ятий елемент масиву : " + newArray[4]);
newArray.shift();
console.log(newArray);