$(document).ready(function () {
	$('.my-background-video').bgVideo();
});

// $(document).scroll(function () {
//     if (window.scrollY > 50) {
//         $(".zoom").stop().animate({
//             fontSize: '17px'
//         });
//     } else {
//         $(".zoom").stop().animate({
//             fontSize: '25px'
//         });
// 	console.log('zoom');
//     }
// });

$(function() {

	$(window).scroll(function() {
  
	  var mass = Math.min(5, 1+0.002*$(this).scrollTop());
  
	  $('#zoom').css('transform', 'scale(' + mass + ')');
	});
  });