// Вказуємо зображення --------------------------
const img1 = `<img src="img/Light.png" alt="">`;
const img2 = `<img src="img/TV.png" alt="">`;
const img3 = `<img src="img/Heating.png" alt="">`;
const img4 = `<img src="img/Alarms.png" alt="">`;
const img5 = `<img src="img/plus.png" alt="">`;

// Значення форм --------------------------------
let formArr = [];

$(`.btn`).click(function() {
	formArr[0] = document.querySelector(`.formName`).value;
	formArr[1] = document.querySelector(`.formInfo`).value;
	formArr[2] = document.querySelector(`.formMode`).value;
})

// Створення стандартних блоків -----------------
	function createMenu(name = formArr[0], info = formArr[1], value = `%`, img = img5) {
		return document.querySelector(`.item:empty`).innerHTML =
			`<h2 onclick="move()">${img}${name}</h2>
			<div class="info">
			Status:
			<button class="turnOn">On</button>
			<button class="turnOff">Off</button>
			${info}:
			<input class="range" name="range" type="range" min="0" max="100" value="0">
			<output class="onrange" for="range">0</output>${value}
			<br>Work mode:
			<select class="select">
				<option value="">Normal</option>
				<option value="">Save mode</option>
			</select>
			<button class="remove">Remove</button>
			</div>`
	}

createMenu(`Light`, `Brightness`, `%`, img1)
createMenu(`TV`, `TVchannel`, ``, img2)
createMenu(`Heating`, `Warmth`, `%`, img3)
createMenu(`Alarms`, `Loudness`, `%`, img4)

// Івенти ---------------------------------------
function hideAll() {
	if ($(`h2`).hasClass("active") == false) {
		$(`h2`).toggleClass(`active`).next().slideToggle(300);
	}
}

function showAll() {
	$(`.active`).toggleClass(`active`).next().slideToggle(300);
}

function onAll() {
	$(`.turnOn`).css(`backgroundColor`, `#039600`);
	$(`.turnOff`).css(`backgroundColor`, `white`);
	$(`:input`).nextAll().prop("disabled", false);
}

function offAll() {
	$(`.turnOff`).css(`backgroundColor`, `red`);
	$(`.turnOn`).css(`backgroundColor`, `white`);
	$(`:input`).nextAll().prop("disabled", true);
}

$(`.remove`).click(function() {
	$(this).parent().remove();
})

$("h2").click(function() {
	$(this).toggleClass(`active`).next().slideToggle(300);
})

$(".turnOn").click(function() {
	$(this).css(`backgroundColor`, `#039600`);
	$(this).next().css(`backgroundColor`, `white`);
	$(this).nextAll().prop("disabled", false);
})

$(".turnOff").click(function() {
	$(this).css(`backgroundColor`, `red`);
	$(this).prev().css(`backgroundColor`, `white`);
	$(this).nextAll().prop("disabled", true);
})

$(function() {
let el;
$(".range").change(function() {
el = $(this);
el.next(".onrange").text(el.val());
})
.trigger('change');
});
