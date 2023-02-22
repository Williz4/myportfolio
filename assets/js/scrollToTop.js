$(document).ready(function(){
	//show hide button on Scroll
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//smooth scrolling to the top
	$('.scrollToTop').click(function() {
		$('html,body').animate({scrollTop: 0}, 500)
	})
});
