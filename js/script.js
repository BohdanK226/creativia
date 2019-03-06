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

    $(".clients .owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            navText: "",
            items: 1,
            mouseDrag: true,
            smartSpeed: 1500,
            autoplay: true,
            autoplayTimeout: 993000
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
    //*************** circle progress bar ************
    var circle_viewed = false;
    var circle_scroll = $('.circle');
    var offset = circle_scroll.offset();

    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat(offset.top)) - parseFloat($(window).height()))) && (!(circle_viewed))) { //if page skrolling
            $('.circle-1').circleProgress({
                size: 160,
                startAngle: .3,
                value: 0.9,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
            });

            $('.circle-2').circleProgress({
                size: 160,
                startAngle: .6,
                value: 0.8,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
            });

            $('.circle-3').circleProgress({
                size: 160,
                startAngle: .9,
                value: 0.70,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
            });

            $('.circle-4').circleProgress({
                size: 160,
                startAngle: .3,
                value: 0.9,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
            });

            circle_viewed = true;
        }
    });
});
