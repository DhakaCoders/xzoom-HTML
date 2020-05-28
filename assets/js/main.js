$(document).ready(function(){
	$('.nav-items-hass-submenu').click(function(){
		$('.submenu-items').toggleClass('js-submenu-items');
	});
	$('.slick-bnr-slide').slick({
        autoplaySpeed: 3000,
        arrows: false,
        autoplay: true,
        dots: true
      });
	
});