$(document).ready(function () {
    // $(".owl-carousel").owlCarousel({
    //         loop: false,
    //         margin: 10,
    //         nav: true,
    //         items: 1,
    //         mouseDrag: false,
    //         smartSpeed: 700,
    //         autoplay: false,
    //     autoplayTimeout:3000,
    //     rewind: true
    //     }
    // );


    //********** -- mobile menu behaviour --------

    var mobile_menu = $('header nav ul');

    $(".mobile-menu").click(function () {
        mobile_menu.addClass('show-menu');
    });
    $(".close-icon").click(function () {
        mobile_menu.removeClass('show-menu');
    });
    $('header nav ul a').click(function () {
        if (mobile_menu.hasClass('show-menu')) {
            mobile_menu.removeClass('show-menu');
        }
    });
    $(window).resize(function () {
        if (mobile_menu.hasClass('show-menu')) {
            mobile_menu.removeClass('show-menu');
        }
    });

//**********************************************************
});
