$(document).ready(function(){

	enter_number('.left-player');
	enter_number('.right-player');
	
	$('.rotate').click(function() {
		ID = $(this).attr('id');
		rotate(ID)
	});

});

function enter_number(selector) {
	$(selector).click(function() {
		var ID = $(this).attr('id');
		var player = prompt("Please enter player number", "");
		$('#'+ID+'nr').html(player);
	});
}

function rotate(selector) {
	var side = selector.split('-')[0][0];
	var N = 6;
	var pos5 = $("#"+side+"p"+N+"nr").html();
	for (var i=1; i<=N; i++) {
		var player_selector = "#"+side+"p"+i+"nr";
		var current_number = $(player_selector).html();
		if (i == 1) {
			$("#"+side+"p"+N+"nr").html(current_number);
		} else {
			$("#"+side+"p"+(i-1)+"nr").html(current_number);
		}
	}
	$("#"+side+"p"+(N-1)+"nr").html(pos5);
}
