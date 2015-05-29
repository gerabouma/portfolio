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

};

$(document).ready(main);