var main = function () {
 "use strict";
 
         setInterval(function() { 
 	
 	            if ($(".foto1").hasClass("selected")){
                            $(".foto1").fadeOut(3000, function (){
                                 $(".foto2").fadeIn(3000, function () {
                            });
                    $(".foto2").addClass("selected");
                    $(".foto1").removeClass("selected");
                     
                });      
                }
                else if ($(".foto2").hasClass("selected")){
                            $(".foto2").fadeOut(3000, function (){
                                 $(".foto3").fadeIn(3000, function () {
                            });
                    $(".foto3").addClass("selected");
                    $(".foto2").removeClass("selected");
                    
                });
                }
                else if ($(".foto3").hasClass("selected")){
                            $(".foto3").fadeOut(3000, function (){
                                 $(".foto4").fadeIn(3000, function () {
                            });
                    $(".foto4").addClass("selected");
                    $(".foto3").removeClass("selected");
                    
                
                });
                }
                else if ($(".foto4").hasClass("selected")){
                            $(".foto4").fadeOut(3000, function (){
                                 $(".foto5").fadeIn(3000, function () {
                            });
                    $(".foto5").addClass("selected");
                    $(".foto4").removeClass("selected");
                    
                
                });
                }
                else if ($(".foto5").hasClass("selected")){
                            $(".foto5").fadeOut(3000, function (){
                                 $(".foto6").fadeIn(3000, function () {
                            });
                    $(".foto6").addClass("selected");
                    $(".foto5").removeClass("selected");
                    
                
                });
                }
                else {
                            $(".foto6").fadeOut(3000, function (){
                                 $(".foto1").fadeIn(3000, function () {
                            });
                    $(".foto1").addClass("selected");
                    $(".foto6").removeClass("selected");
                   
                        
                });
                }
 		},3000); 
 function smoothScroll(target, time) {
	var margin = ($('#main-header').outerHeight() - 1);
	if (!time) { time = '1000'; }

	if (target === 'toTop') {
		$('html,body').animate({
			scrollTop: 0
		}, time);
	}
	else {
		$('html,body').animate({
			scrollTop: target.offset().top - margin
		}, time);
	}
}

// SCROLL DOWN ARROR BUTTON

	var count = 0;

	$('#scroll').on("click", function(){

		var sections = $('section');

    //+55px to offset the margin-top
		var $this = $(this),
			top = ($this.offset().top - $(window).scrollTop()) + 55,
			right = $this.offset().right;


		$this.css({
			position: 'fixed',
			top: top,
			right: right
		})
		.animate({
			right: '5%',
			top: '90%'
		}, 600)
		.addClass('clicked');

		var target;

		// END OF ARRAY HAS ALEADY BEEN REACHED
		if (count > (sections.length -1) ) { 
			count = -1;
			
			smoothScroll('toTop');
			$this.removeClass('rotate');
		}
		// JUST REACHED END OF ARRAY
		else { 
			target = $(sections[count]);
			if (count === (sections.length -1)) {
				$this.addClass('rotate');
			}
			smoothScroll(target);
		}
	
		count++;

		$(this).find('.arrow-bounce').removeClass('arrow-bounce');

	});
};

$(document).ready(main);