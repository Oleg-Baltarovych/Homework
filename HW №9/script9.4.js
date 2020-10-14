$('.checkbox').click(function(){
	let count = $(':checkbox:checked').length;
	if (count > 3) {
		$('body input:checkbox').prop('checked', false);
	}
})