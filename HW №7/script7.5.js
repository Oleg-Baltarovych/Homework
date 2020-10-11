function clickFun() {
	let p = document.createElement("p");
	p.innerHTML = "I was pressed!";
	document.body.append(p);
}
function mouseON() {
	let p = document.createElement("p");
	p.innerHTML = "Mouse on me!";
	document.body.append(p);
}
function mouseOFF() {
	let p = document.createElement("p");
	p.innerHTML = "Mouse is not on me!";
	document.body.append(p);
}