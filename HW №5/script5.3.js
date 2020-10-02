class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name, this.surname);
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    super.showFullName();
    return (this.midleName = midleName);
  }
  showCourse() {
    let date = new Date();
    let year = date.getFullYear();
    let result = year - this.year;
    return result;
  }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
