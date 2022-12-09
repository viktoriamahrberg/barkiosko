$(document).ready(function () {
	$('.my-background-video').bgVideo();
});


// https://codepen.io/seriouslyally/pen/XwKMzj

$(function() {

	$(window).scroll(function() {
  
	  var mass = Math.min(20, 1+0.002*$(this).scrollTop());
  
	  $('#zoom-content').css('transform', 'scale(' + mass + ')');
	});
  });