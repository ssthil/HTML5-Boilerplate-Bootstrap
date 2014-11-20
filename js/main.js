$(function(){
	$('.nav a').click(function(){
		$('.nav li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
    return false;
	});
	
});
