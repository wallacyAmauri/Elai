/*header*/
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-link");

/* ----------- para rodar os codigos dos Scroll ----------- */
window.addEventListener("scroll", () => {
  activeLink();
  if(!skillsPlayed) skillsCounter();
  if(!mlPlayed) mlCounty();
  
});

/* ----------- codigo do Navbar ----------- */

function stickNavbar(){
    header.classList.toggle("scrolled",window.scrollY > 0);
 }
 
 stickNavbar();
 
 window.addEventListener("scroll", stickNavbar);
 
/* ----------- abrir e fechar navbar menu ----------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});
/* ----------- progresso de animação de barra ----------- */

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  
  if(window.innerHeight >= topPosition +el.offsetHeight) return true;
  return false;
}


let skillsPlayed = false;

function skillsCounter() {
  if(!hasReached(first_skill)) return;

  let skillsPlayed = true;

  sk_counters.forEach((counter, i) => {
  let target = +counter.dataset.target;
  let strokeValue = 427 - 427 * (target / 100);

  progress_bars[i].style.setProperty("--target", strokeValue);

  setTimeout(() =>{
      updateCount(counter,target);
  }, 400);    
});

  progress_bars.forEach(
      (p) =>(p.style.animation = "progress 2s ease-in-out forwards")
      );
}

    /* ----------- contagem de serviços Navbar ----------- */

    let mlPlayed = false;

    function mlCounty() {
        if(!hasReached(ml_section)) return;
        mlPlayed = true;
        ml_counters.forEach((ctr) => {
            let target = +ctr.dataset.target;
            
            setTimeout(() => {
                updateCount(ctr, target);
            }, 400);
        });
    }
/* ----------- scroll do link active ----------- */

function activeLink() {
  let sections = document.querySelectorAll("section[id]");
  let passedSections = Array.from(sections).map((sct, i) => {
      return {
          y:  sct.getBoundingClientRect().top - header.offsetHeight,
          id: i,
      };
  })
  .filter((sct) => sct.y <= 0);
  let currSectionID = passedSections.at(-1).id;
  
  links.forEach((l) => l.classList.remove("active"));
  links[currSectionID].classList.add("active");
} 
activeLink();

/*about*/
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