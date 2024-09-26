
let mixer = mixitup('.products', { 
    selectors: {
      target: '.card'
     },
   animation: {
     duration: 500,
   },
 });

/*header*/
// const header = document.querySelector("header");
const ulMenu = document.querySelector("menu");
const menuLink = document.querySelector("nav-link");
// const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-link");

function scrollHeader(){
    const header = document.getElementById('header');
    this.scrolly >= 20 ? header.classList.add('active') : header.classList.remove('active')
    console.log(this.scrolly)
}

window.addEventListener('scroll', scrollHeader)
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active')
        } else{
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active')
        }
    });
}
window.addEventListener('scroll', scrollActive)
/*about*/
// var swiper = new Swiper("...", {
//     effect: "slide",
//     speed: 900,
//     loop:true,
//     // mousewheel: {
//         //     invert:false,
//         //     thresholdDelta: 50,
//         //     sensitivity:1,
//         // },
//     autoplay: {
//             delay: 5500,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             type: "fraction",
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
// });
/* ----------- swiper about ----------- */
var swiper3 = new Swiper(".about-grid-home", {
    effect: "creative",
    grabCursor: true,
    speed: 1500,
    loop: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
    },
    autoplay: {
        delay: 1400,
        disableOnInteraction: false,
    },
});
     
/*information*/
  var swiper2 = new Swiper(".information_slide", {
    // slidesPerView: 4,
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
        240: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 4,
        },
        1000:  {
            slidesPerView: 6,
        },
        1200:  {
            slidesPerView: 8,
        },
    },
  });
/*faq*/
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
var swiper3 = new Swiper(".team-slider", {
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991:  {
            slidesPerView: 3,
        },
    },
  });