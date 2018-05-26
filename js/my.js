$(document).ready(function () {
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		auto: true,
	});
$('.menu-togglr').on('click',function(){
    $('#mainav').slideToggle('fast');
    $(this).toggleClass('active');
});

});
