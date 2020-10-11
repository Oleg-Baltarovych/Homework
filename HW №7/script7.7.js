let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
cities.appendChild(option1);
cities.appendChild(option2);
cities.appendChild(option3);

function changeFun() {

	if (country.options[0].selected) {
		cities.children[0].innerHTML = "Berlin";
		cities.children[1].innerHTML = "Hamburg";
		cities.children[2].innerHTML = "Munich";
	}
	if (country.options[1].selected) {
		cities.children[0].innerHTML = "New York";
		cities.children[1].innerHTML = "Los Angeles";
		cities.children[2].innerHTML = "Chicago";
	}
	if (country.options[2].selected) {
		cities.children[0].innerHTML = "Kyiv";
		cities.children[1].innerHTML = "Odesa";
		cities.children[2].innerHTML = "Lviv";
	}
	let p = document.querySelector("p");
	p.innerHTML = `${country.options[country.selectedIndex].innerHTML} 
	             , ${cities.options[cities.selectedIndex].innerHTML}`;
}
