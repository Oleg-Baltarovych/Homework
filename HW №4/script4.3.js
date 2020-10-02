function checkAge() {
  let age = +prompt("Введіть свій вік.");
  if (age <= 14 && age > 0) {
    throw new Error("Ви ще надто молодий");
  } else if (age === "" || age === " ") {
    throw new Error("Поле пусте. Будь ласка вкажіть ваш вік.");
  } else if (isNaN(age)) {
    throw new Error("Введіть будь ласка числове значення.");
  } else {
    throw new Error("Ви ввели некоректне значення.");
  }
  return true;
}
try {
  let result = checkAge();
  alert(result);
} catch (error) {
  alert(error.name);
  alert(error.message);
}
