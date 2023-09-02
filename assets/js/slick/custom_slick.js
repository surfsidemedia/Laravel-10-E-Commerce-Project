$(".slick-1")
  .slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  })
  .slickAnimation();

$(".slick-2")
  .slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="custom-arrow next"><span>Next</span><i class="fas fa-chevron-right ms-3"></i></div>',
    prevArrow: '<div class="custom-arrow prev"><i class="fas fa-chevron-left me-3"></i><span>Prev</span></div>',
  })
  .slickAnimation();

$(".insta-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
});

$(".insta-slider1").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 512,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slide-1-1").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  dots: true,
  arrows: false,
});

$(".slide-1").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
});

$(".slide-2").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 500,
  autoplay: true,
  dots: true,
  arrows: false,
});

$(".slide-3").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
});

$(".slide-three").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }],
});

$(".slide-3-1").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
    },
  ],
});

$(".slide-4").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-4_1").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-5").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-5_1").slick({
  dots: true,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-6").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 705,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".slide-7").slick({
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slide-7-1").slick({
  dots: true,
  infinite: false,
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".our-product").slick({
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1630,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".product-slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".brand-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".category-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1501,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        fade: true,
        speed: 800,
      },
    },
  ],
});

$(".category-slider1").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1425,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        fade: true,
      },
    },
  ],
});

$(".category-slider2").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: true,
        fade: true,
      },
    },
  ],
});

$(".quick-view-slider").each(function (key, item) {
  var sliderIdName = "slider" + key;
  var sliderNavIdName = "sliderNav" + key;

  this.id = sliderIdName;
  $(".quick-nav")[key].id = sliderNavIdName;

  var sliderId = "#" + sliderIdName;
  var sliderNavId = "#" + sliderNavIdName;

  $(sliderId).slick({
    dots: false,
    infinite: true,
    speed: 1500,
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: sliderNavId,
  });

  $(sliderNavId).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderId,
    swipe: false,
    vertical: true,
    verticalScrolling: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  });
});

$(document).ready(function () {
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        infinite: false,
        arrows: false,
        slidesToShow: 1,
      },
    }, ],
  });
});

$(document).ready(function () {
  $(".custome-service-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

$(document).ready(function () {
  $(".arrivals-shoes-image").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    adaptiveHeight: true,
    dots: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
  nextArrow: '<div class="custom-arrow next"><span>Next</span><i class="fas fa-chevron-right ms-3"></i></div>',
  prevArrow: '<div class="custom-arrow prev"><i class="fas fa-chevron-left me-3"></i><span>Prev</span></div>',
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  verticalSwiping: true,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
  vertical: true,
});

$(document).ready(function () {
  $(".details-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".details-image-option",
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".details-image-option").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".details-image",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".details-image-1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".details-image-vertical",
  });
  $(".details-image-vertical").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".details-image-1",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    centerPadding: 0,
    arrows: false,
    infinite: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        vertical: false,
      },
    }, ],
  });
});