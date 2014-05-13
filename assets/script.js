$(document).ready(function(){
	$("#scroll-top").hide();

	$(function() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-top').fadeIn();
			} else {
				$('#scroll-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#scroll-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	$('#scroll-top').hover(
		function() {
			$('#scroll-top').css("color", "rgba(0,0,0,1)");
		}, function() {
			$('#scroll-top').css("color", "rgba(0,0,0,.5)")
		}
	);

});