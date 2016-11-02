$(document).ready(function(){

	enter_number('.left-player');
	enter_number('.right-player');

});

function enter_number(selector) {
	$(selector).click(function() {
		var ID = $(this).attr('id');
		var player = prompt("Please enter player number", "");
		$('#'+ID+'nr').html(player);
	});
}
