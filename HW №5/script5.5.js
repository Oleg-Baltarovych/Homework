class GeometricFigure {
	getArea() {
		return 0;
	}
	toString() {
		return Object.getPrototypeOf(this).constructor.name;
	}
}
class Triangle extends GeometricFigure {
	constructor(a, b) {
		super();
		this.a = a;
		this.b = b;
	}
	getArea() {
		let S = (this.a * this.b) / 2;
		return S;
	}
}
class Square extends GeometricFigure {
	constructor(c) {
		super();
		this.c = c;
	}
	getArea() {
		let S = this.c * 4;
		return S;
	}
}
class Circle extends GeometricFigure {
	constructor(r) {
		super();
		this.r = r;
	}
	getArea() {
		let S = 3.14 * (this.r ** 2);
		return S;
	}
}
let fig = [new Triangle(4, 5), new Square(7), new Circle(5)];
function handleFigures(figur) {
	let result = 0;
	for (let i = 0; i < figur.length; i++) {
		if (figur[i] instanceof GeometricFigure) {
			console.log("Geometric figure: " + figur[i] + " - area: " + figur[i].getArea());
			result += figur[i].getArea();
			}
		}
		console.log(result);
	}
console.log(handleFigures(fig));
