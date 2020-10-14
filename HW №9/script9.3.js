let $div1 = $('h3').prev($('div'));
$div1.remove();
let $div2 = $('div:last');
$div2.remove();
$('h3:first').before($div1);
$('h3:last').before($div2);