 $(document).ready(function () {

/*-------------------------------------------------------------------------------
        smooth scroll jQ start 
-------------------------------------------------------------------------------*/
    $('.mobile-menu .overlay-content a').smoothScroll({
        offset: 0
    });

    $('.footer_logo a').smoothScroll({
            offset: 0
        });
/*-------------------------------------------------------------------------------
        smooth scroll jQ end 
-------------------------------------------------------------------------------*/
//scroll animation start
     $(".scroll_top .scroll").click(function () {
         $("html, body").animate({
             "scrollTop": 0
         }, 500);
     });

     $(window).scroll(function () {
         if ($(window).scrollTop() > 400) {
             $(".scroll").fadeIn(500);
         } else($(".scroll").fadeOut(500))
     });

// isotope start 
    var $grid = $('.port_box_wrapper').isotope({
      itemSelector: '.port_box',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    })

// filter items on button click
    $('.btn-group').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

// magnific-pop up
    $('.popup').magnificPopup({
      type: 'image',
      // other options
      gallery:{
        enabled:true
      }
    });

// owl carousal for testimonial
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 700,
        autoplayHoverPause: true,
        // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:1,
                dots: true,
                margin:200,
            },
            1000:{
                items:1,
                dots: true,
            }
        }
    })
/*------------------------------------------------------------------------------- 
        sticky menu
 -------------------------------------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 130) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

 })
