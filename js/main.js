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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
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


// Banner slider slick

$('.hero-header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 4000
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.hero-header',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});


// Trips slider

$('.tabSlider').each(function() {
    $(this).slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(this).parent().find('.trips-prev'),
        nextArrow: $(this).parent().find('.trips-next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })
})

// Video Popup

$('.popup-btn').on('click', function () {
    $('.video-popup').fadeIn('slow');
    return false;
});

$('.popup-bg').on('click', function () {
    $('.video-popup').slideUp('slow');
    return false;
});

$('.close-btn').on('click', function () {
    $('.video-popup').fadeOut('slow');
    return false;
});

// input using select2

if ($("#datepicker-checkin").length) {
    $('#datepicker-checkin').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkin").datepicker("setDate", "0");
}

if ($("#datepicker-checkout").length) {
    $('#datepicker-checkout').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkout").datepicker("setDate", "0");
}

if ($("#datepicker-checkin2").length) {
    $('#datepicker-checkin2').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkin2").datepicker("setDate", "0");
}

if ($("#datepicker-checkout2").length) {
    $('#datepicker-checkout2').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkout2").datepicker("setDate", "0");
}

if ($("#datepicker-checkin3").length) {
    $('#datepicker-checkin3').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkin3").datepicker("setDate", "0");
}

if ($("#datepicker-checkout3").length) {
    $('#datepicker-checkout3').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkout3").datepicker("setDate", "0");
}

if ($("#datepicker-checkin4").length) {
    $('#datepicker-checkin4').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkin4").datepicker("setDate", "0");
}

if ($("#datepicker-checkout4").length) {
    $('#datepicker-checkout4').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
    $("#datepicker-checkout4").datepicker("setDate", "0");
}

// Testimonial Slider

$('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.test-prev'),
    nextArrow: $('.test-next'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

})(jQuery);

