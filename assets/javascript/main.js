$(window).scroll(() => {
	
	let pixFromTop = $(this).scrollTop();	

	$('.logo').css({
		'transform': `translate(0px, ${pixFromTop/5}%)`
	});

});



$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},800);           
});


$("#navPortfolio").click(function() { 
	$('html,body').animate({
        scrollTop: $("#portfolio").offset().top},1000);           
});


$("#navContact").click(function() { 
	$('html,body').animate({
        scrollTop: $("#footer").offset().top},1100);           
});


$('#navResume').click(() => {
	$('#resumeModal').modal('toggle');
});
