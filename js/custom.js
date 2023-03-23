jQuery(document).ready(function () {

// header Fixed

"use strict";

    // Header Background Change

    jQuery(document).ready(function(){
        jQuery(window).scroll(function () {
        if(jQuery(document).scrollTop() > 50){
            jQuery(".header").addClass('header-fix');
        }
        else{
            jQuery(".header").removeClass('header-fix');
            jQuery(".main-menu").removeClass('move');
            jQuery(".brand") .css('display','none');
        }
    });
    });

// Menu
jQuery('.stellarnav').stellarNav({
    //theme: 'light',
    breakpoint: 960,
    position: 'left',
  });




//main-banner

$('.banner-slider').owlCarousel({
    loop:true,
    nav: true,
    dots:true,
    autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

// Banner 2nd 

$('.banner-slider2').owlCarousel({
    loop:true,
    nav: true,
    dots:false,
    autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})


// Client Slider 

$('.Client-slider').owlCarousel({
    loop:true,
    nav: false,
    dots:false,
    autoplay:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:5,
        }
    }
})




// first Counter Code


$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 21,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 347,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 9554,duration: 2500});
$('#number5').jQuerySimpleCounter({end: 24,duration: 3000});
$('#number6').jQuerySimpleCounter({end: 11,duration: 3000});
$('#number7').jQuerySimpleCounter({end: 197,duration: 2000});
$('#number8').jQuerySimpleCounter({end: 185,duration: 2500});










// Search toggle

$(".search-btn").click(function(){
    $(".search-area").fadeIn();
  });
  $(".dismiss").click(function(){
    $(".search-area").fadeOut();
  });


















});