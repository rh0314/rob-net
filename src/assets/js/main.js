"use strict";


jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

    //    $('.statistic-counter').counterUp({
    //        delay: 10,
    //        time: 2000
    //    });

    //    $('.statistic').counterUp({
    //        delay: 10,
    //        time: 2000
    //   });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_comments_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });


    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 175;
        var maxO = 0.9
        var el = jQuery('.navbar-fixed-top');
        if (el && el[0]) {
            el = el[0];
        }

        if (top > 0 && top < height) {
            var o = ((((100 / height) * top) * .01) * maxO);
            var c = "rgba(14,17,25," + o.toString() + ")";
            el.style.backgroundColor = c;
        }
        else if (top > height) {
            el.style.backgroundColor = "rgba(14,17,25," + maxO + ")";
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

    // scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    //End
});
