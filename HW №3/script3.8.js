let strIn = "i love java script";
function firstLatter(string) {
  let strOut = "";
  for (i = 0; i < string.length; i++) {
    if (string[i - 1] === " " || i === 0) {
      strOut += string[i].toUpperCase();
    } else {
      strOut += string[i];
    }
  }
  return strOut;
}
console.log(firstLatter(strIn));
