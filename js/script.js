$(document).ready(function () {
    $(".ipad-slider .owl-carousel").owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOutRight',
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            mouseDrag: false,
            smartSpeed: 1500,
            autoplay: true,
        autoplayTimeout: 3000
        }
    );


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
