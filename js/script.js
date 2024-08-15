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
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

//   faq
var faq = document.getElementsByClassName("faq-box-question");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Alterne entre adicionar e remover a classe "ativa",
        para destacar o botão que controla o painel
        */
        this.classList.toggle("active");
        /* Alternar entre ocultar e mostrar o painel ativo */
        var body = this.nextElementSibling;
        if (body.style.maxHeight === "100px") {
            body.style.maxHeight = "0px";
        } else {
            body.style.maxHeight = "100px";
        }
    });
}