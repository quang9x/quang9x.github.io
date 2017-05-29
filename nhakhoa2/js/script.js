
jQuery(function ($) {

    // SLIDER 1

    if ($("#slider_1").length ) {

        $("#slider_1").owlCarousel({
             items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            },
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        
    }

    // BACK TO TOP BUTTON.
            $.scrolltop();

    // Wow initial
    new WOW().init();

    


    

});