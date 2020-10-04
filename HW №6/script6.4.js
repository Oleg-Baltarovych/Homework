// Спосіб №1
let listOne = document.querySelectorAll("#list > li");
alert(listOne[0].innerHTML);
alert(listOne[4].innerHTML);
alert(listOne[1].innerHTML);
alert(listOne[3].innerHTML);
alert(listOne[2].innerHTML);
// Спосіб №2
alert(list.children[0].innerHTML);
alert(list.children[4].innerHTML);
alert(list.children[1].innerHTML);
alert(list.children[3].innerHTML);
alert(list.children[2].innerHTML);
// Спосіб №3
alert(list.firstElementChild.innerHTML);
alert(list.lastElementChild.innerHTML);
alert(list.firstElementChild.nextElementSibling.innerHTML);
alert(list.lastElementChild.previousElementSibling.innerHTML);
alert(list.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);