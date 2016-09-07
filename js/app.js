$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e){
		if (e.which == '88'){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})

	.keyup(function(e){
		if (e.which == '88'){
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

function playHadouken(){
	var sound = $('#hadouken-sound')[0];
	sound.volume = .5;
	sound.load();
	sound.play();	
}