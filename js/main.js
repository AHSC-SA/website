(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    // $(window).scroll(function () {
    //     if ($(window).width() < 992) {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('bg-light shadow');
    //         } else {
    //             $('.fixed-top').removeClass('bg-light shadow');
    //         }
    //     } else {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('bg-light shadow').css('top', -45);
    //         } else {
    //             $('.fixed-top').removeClass('bg-light shadow').css('top', 0);
    //         }
    //     }
    // });
    

    $(document).ready(function () {
        function checkScroll() {
            if ($(window).width() < 992) {
                if ($(window).scrollTop() > 45) {
                    $('.fixed-top').addClass('bg-light shadow').css('visibility', 'visible');
                    $('.navbar').css('visibility', 'visible');
                    $('.navbar').addClass('navbar-light');
                    $('.navbar').removeClass('navbar-dark');
                } else {
                    $('.fixed-top').removeClass('bg-light shadow').css('visibility', 'visible');
                    $('.navbar').css('visibility', 'visible');
                    $('.navbar').removeClass('navbar-light');
                    $('.navbar').addClass('navbar-dark');


                }
            } else {
                if ($(window).scrollTop() > 45) {
                    $('.fixed-top').addClass('bg-light shadow').css({'top': -45, 'visibility': 'visible'});
                    $('.navbar').css('visibility', 'visible');


                } else {
                    $('.fixed-top').removeClass('bg-light shadow').css({'top': 0, 'visibility': 'visible'});
                    $('.navbar').css('visibility', 'visible');
                }
            }
        }
    
        // Run checkScroll on page load
        checkScroll();
    
        // Run checkScroll on window scroll
        $(window).scroll(function () {
            checkScroll();
        });
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

