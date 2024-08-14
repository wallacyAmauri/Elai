var swiper = new Swiper(".about-slide", {
    effect: "slide",
    speed: 900,
    loop:true,
    // mousewheel: {
    //     invert:false,
    //     thresholdDelta: 50,
    //     sensitivity:1,
    // },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  var swiper2 = new Swiper(".information_slide", {
    slidesPerView: 4,
    speed: 500,
    centeredSlides:true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
        480: {
            slidesPerView: 4,
        },
        640: {
            slidesPerView: 8,
        },
        1000:  {
            slidesPerView: 12,
        },
    }
  });