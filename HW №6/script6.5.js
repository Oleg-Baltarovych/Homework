document.querySelector("h1").style="background:green";
myDiv.children[0].style="font-weight:bolder";
myDiv.children[1].style="color:red";
myDiv.children[2].style="text-decoration:underline";
myDiv.children[3].style="font-style:italic";
document.querySelector("span").style="opacity:0";
let elements = document.querySelectorAll('ul > li');
for (let i = 0; i < elements.length; i++) {
	elements[i].style="display:inline";
}