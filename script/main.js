$( window ).load(function() {

});


$(document).ready(function(){
	/*ANO */
	var date = new Date();
	$('footer span').text(date.getFullYear());

	$('#fullpage').fullpage({
		anchors: ['hero-anchors', 'products-anchors', 'about-anchors', 'numbers-anchors', 'gallery-anchors', 'contacts-anchors'],
		menu: '#menu',
		scrollingSpeed: 1000
	});
	
	/*Menu*/
	$('.menu-option').on('click', function() {
		if($(this).hasClass('active')){
			$('.menu-option i').removeClass('fa-time');
			$('.menu-option i').addClass('fa-bars');
			$('header').removeClass('bounceInDown');
			$('header').removeClass('bounceOutUp');
			$('header').addClass('animated bounceOutUp');
			$('.menu-option').removeClass('active');
		}else{
			$('.menu-option i').removeClass('fa-bars');
			$('.menu-option i').addClass('fa-times');
			$('header').show();
			$('header').removeClass('bounceInDown');
			$('header').removeClass('bounceOutUp');
			$('header').addClass('animated bounceInDown');
			$('.menu-option').addClass('active');
		}
	});

	$('header li').on('click', function() {
		$('.menu-option i').removeClass('fa-time');
		$('.menu-option i').addClass('fa-bars');
		$('header').removeClass('bounceInDown');
		$('header').removeClass('bounceOutUp');
		$('header').addClass('animated bounceOutUp');
		$('.menu-option').removeClass('active');
		$(this).siblings().children('div').children('a').removeClass('selected');
		$('a', this).addClass('selected');
	});

	$('.fa-chevron-down').on('click', function() {
		$('.menu-option').fadeIn(1500);
	});

	$('#menu li').hover(function(){
		$('.monitor h2').text($('span', this).text());
	});

	/*GALLERY*/
	var gallery = $('#gallery .row > ul li').length;
	for (var i = 1; i <= gallery; i++) {
		$( "<li></li>" ).appendTo( "#gallery .slider nav ul" );
		$( "<li class='top50'> <img src='http://www.joaoborges.me/development/cnas/images/gallery/img-"+i+".jpg'></li>" ).appendTo( "#gallery .slider > ul" );
	}

	$('#gallery .row > ul li').on('click', function() {
		$('.menu-option').fadeOut(800);
		$('#gallery .background').fadeIn(900);
		$('#gallery .slider').fadeIn(900);
	});

	$("a[href='#close']").on('click', function() {
		$('#gallery .background').fadeOut(900);
		$('#gallery .slider').fadeOut(900);
		$('.menu-option').fadeIn(1000);
		$('#gallery .slider > ul li').removeClass('selected');
		$('#gallery .slider > nav ul li').removeClass('selected');
	});

	$("a[href='#next-slider']").on('click', function() {
		var elm = $('#gallery .slider > ul .selected').index()+1;
		$('#gallery .slider > ul li').removeClass('selected');
		$('#gallery .slider > nav ul li').removeClass('selected');
		loopGallery(elm+1);
	});
	$("a[href='#prev-slider']").on('click', function() {
		var elm = $('#gallery .slider > ul .selected').index()+1;
		$('#gallery .slider > ul li').removeClass('selected');
		$('#gallery .slider > nav ul li').removeClass('selected');
		loopGallery(elm-1);
	});

	$("#gallery .slider > nav ul li").on('click', function() {
		var elm = $(this).index()+1;
		$('#gallery .slider > ul li').removeClass('selected');
		$('#gallery .slider > nav ul li').removeClass('selected');
		loopGallery(elm);
	});
});

var loopGallery = function (elm) {
	var gallery = $('#gallery .slider > ul li').length;
	if(elm == 0){
		$('#gallery .slider > ul li:nth-child('+gallery+')').addClass('selected');
		$('#gallery .slider > nav ul li:nth-child('+gallery+')').addClass('selected');
	}else if(elm > gallery){
		$('#gallery .slider > ul li:nth-child('+1+')').addClass('selected');
		$('#gallery .slider > nav ul li:nth-child('+1+')').addClass('selected');
	}else{
		$('#gallery .slider > ul li:nth-child('+elm+')').addClass('selected');
		$('#gallery .slider > nav ul li:nth-child('+elm+')').addClass('selected');
	}
}

var showGallery = function(elm){
	var nrLi = elm.substr(4,10);
	$('#gallery .slider > ul li:nth-child('+nrLi+')').addClass('selected');
	$('#gallery .slider > nav ul li:nth-child('+nrLi+')').addClass('selected');
}

var animationScroll = function() {
	if($('#hero').hasClass('active')){
		$('.menu-option').hide();
	}else{
		$('.menu-option').fadeIn(1000);
	}

	var animated_delay = function(time){
		return "-webkit-animation-delay:"+time+"s;-moz-animation-delay:"+time+"s;animation-delay:"+time+"s;";
	}  

	if($('#hero').hasClass('active')){
		$('h1').addClass('animated bounceInDown');
	}else if($('#products').hasClass('active')){
		console.log('Products');
	}else if($('#about').hasClass('active')){
		console.log('About');
	}else if($('#numbers').hasClass('active')){
		var number_1 = $('#numbers div:nth-child(3) ul li:nth-child(1)');
		number_1.attr("style", number_1.attr("style") + "; " + animated_delay(0.5));
		number_1.addClass('animated fadeInLeftBig');
		number_1.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			number_1.removeClass('animated fadeInLeftBig')
		});
		var number_2 = $('#numbers div:nth-child(3) ul li:nth-child(2)');
		number_2.attr("style", number_2.attr("style") + "; " + animated_delay(1));
		number_2.addClass('animated fadeInRightBig');
		number_2.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			number_2.removeClass('animated fadeInRightBig')
		});
		var number_3 = $('#numbers div:nth-child(3) ul li:nth-child(3)');
		number_3.attr("style", number_3.attr("style") + "; " + animated_delay(1.5));
		number_3.addClass('animated fadeInLeftBig');
		number_3.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			number_3.removeClass('animated fadeInLeftBig')
		});
		var number_4 = $('#numbers div:nth-child(3) ul li:nth-child(4)');
		number_4.attr("style", number_4.attr("style") + "; " + animated_delay(2));
		number_4.addClass('animated fadeInRightBig');
		number_4.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			number_4.removeClass('animated fadeInRightBig')
		});
	}else if($('#gallery').hasClass('active')){
		console.log('Gallery');
	}else if($('#contacts').hasClass('active')){
		console.log('Contacts');
	}
}



