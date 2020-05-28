$(document).ready(function(){
	$('.nav-items-hass-submenu').click(function(){
		$('.submenu-items').toggleClass('js-submenu-items');
		$('.nav-items-hass-submenu').toggleClass('js-nav-items-hass-submenu');
	});
	$('.slick-bnr-slide').slick({
        autoplaySpeed: 3000,
        arrows: false,
        autoplay: true,
        dots: true
      });
	$('.select-drpdwn').click(function(){
		$('.select-drpdwn').toggleClass('js-select-drpdwn');
	});
});