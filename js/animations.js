$(window).scroll(function() {
	$('.fadeInDown').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.slideInLeft').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated slideInLeft");
		}
	});
});

$(window).scroll(function() {
	$('.slideInRight').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated slideInRight");
		}
	});
});

$(window).scroll(function() {
	$('.profile h2').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.profile p').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.personal-info').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});

$(window).scroll(function() {
	$('#portfolio .item').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});

$(window).scroll(function() {
	$('.page-head').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.skills-display').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated slideInLeft");
		}
	});
});

$(window).scroll(function() {
	$('.skills-table li').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});

$(window).scroll(function() {
	$('article').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});

$(window).scroll(function() {
	$('.contact-form').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInUp");
		}
	});
});
