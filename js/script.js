objectFitImages();

// Burger button
let burgerButton 	= document.querySelector('.burger-button'),
	menu			= document.querySelector('.menu');

burgerButton.addEventListener('click', function(){
	menu.classList.toggle('active-menu');
	burgerButton.classList.toggle('burger-button-active');
});

// Smooth anchors

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});