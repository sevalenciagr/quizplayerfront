$(document).ready(function() {
    $(".menu__toggle").click(function(){
    	$("body").toggleClass("menu-open");
    });

    $('.menu__close').click(function(){
    	$("body").removeClass("menu-open");
    });

    $('.filter__toggle').click(function(){	
    	$('.filter').toggleClass('open');
    });

    $('.login__fields .field input').blur(function(){
	    fieldValue = $(this).val();
	    if(fieldValue == '') {
	        $(this).next('label').addClass('empty');
	        $(this).next('label').removeClass('not-empty');
	    } else {
	        $(this).next('label').addClass('not-empty');
	        $(this).next('label').removeClass('empty');
	    }
	});
	
});