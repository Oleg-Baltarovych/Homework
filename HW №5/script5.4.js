class Worker {
  #experience = 1.2;
  get showExp() {
    return this.#experience;
  }
  set setExp(setExp) {
    this.#experience = setExp;
  }
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    let result = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${+result}`);
  }
  showSalaryWithExperience() {
    let result = this.dayRate * this.workingDays * this.#experience;
    console.log(`${this.fullName} salary: ${+result}`);
  }
  showSalaryWorker() {
    let result = this.dayRate * this.workingDays * this.#experience;
    return result;
  }
  sortSalary(workerArr) {
    let sort = workerArr.sort(function(a, b) {
      return a.showSalaryWorker() - b.showSalaryWorker();
    })
    for (let i = 0; i < sort.length; i++) {
      console.log(sort[i].fullName + ": " + sort[i].showSalaryWorker());
    }
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workerArr = [worker1, worker2, worker3];
console.log("Sorted salary: ");
worker3.sortSalary(workerArr);
