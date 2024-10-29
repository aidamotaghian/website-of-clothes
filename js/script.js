$(document).ready(function(){


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:2000,
        infinite:true,
      });


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });

    $('.inline-example').persianDatepicker({
        autoClose:true,
        inline: true,
        altField: '#inlineExampleAlt',
        altFormat: 'LLLL',
        toolbox:{
            calendarSwitch:{
                enabled: true
            }
        },
        navigator:{
            scroll:{
                enabled: false
            }
        },
        maxDate: new persianDate().add('month', 3).valueOf(),
        minDate: new persianDate().subtract('month', 3).valueOf(),
        timePicker: {
            enabled: true,
            meridiem: {
                enabled: true
            }
        }
    });
   
    $(".owl-carousel").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        mouseDrag:true,
        touchDrag:true,
        autoplayHoverPause:true,
        nav:true,
        dotsEach:true,
             responsive:{
            0:{items:2},
            500:{items:2},
            768:{items:3},
         


        }
    });
    new WOW().init(); 





/* رزرو و سفارش*/
$(".reverse_time").click(function(){
    alert("sss");
    $(".sefaresh1").show(1000);
    $(".newr").show(2000);
 
 
});

$(".r").click(function(){

   
    $(".newr").show(2000);
 
 
});

$(".close-rezerv").click(function(){
    $(".newr").hide(1000);
});
/* $(".material-symbols-outlined").click(function(){
    $(".rezerv1").hide(1000);
}) */


$(".material-symbols-outlined").click(function(){
    $(".sefaresh1").hide(1000);
});

$(".hamrah").click(function(){
    $(".shomareh").show(1000);
});


$(".select").click(function(){
    $(".sefaresh1").show(1000);
  
});
/* اتمام رزرو*/

$('.parent-container1').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });

  
$('.parent-container2').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });


  $('.parent-container3').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });

  $('.parent-container4').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });


  $('.parent-container5').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });

  $('.parent-container6').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });

  $('.parent-container7').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true
      },
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});





  });
