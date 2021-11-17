$(document).ready(function(){
	var btn,gnb,hd,dp2
	 btn  = $('.btn_close')
	 gnb = $('.gnb')
	 hd = $('#header')
	 dp2 = $('.depth2')
	 sl= $('.slider')

	btn.click(function(){
		$('#popup').stop().slideUp();
	});
	gnb.mouseenter(function(){
		hd.stop().animate({'height':370});
		dp2.show();
	});
	hd.mouseleave(function(){
		hd.stop().animate({'height':103});
		dp2.hide();
	});
	$('.slider').bxSlider({
			auto:true,
			speed:500,
			pause:5000
	});
	$('.sec4_1').slick({
		autoplay:true,
		dots:true,
		variableWidth:true,
		slideToShow:1,
		arrows:false

	});
	$('.btn_tab li').click(function(){
		var num;
		num=$(this).index();
		console.log(num);
		$('.btn_tab li').removeClass('on');
		$(this).addClass('on');
		$(".list").eq(num).show().siblings().hide();
	});

	// $('.tab2').click(function(){
	// 	$('.two').show();
	// 	$('.three').hide();
	// 	$('.four').hide();
	// });
	// $('.tab3').click(function(){
	// 	$('.three').show();
	// 	$('.two').hide();
	// 	$('.four').hide();
	// });
	// $('.tab4').click(function(){
	// 	$('.four').show();
	// 	$('.three').hide();
	// 	$('.two').hide();
	// });

});