var swiper3 = new Swiper(".swiper_about", {
    slidesPerView: 1,
    effect: "creative",
    spaceBetween: 30,
    grabCursor: true,
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    // },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },
});