const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");

/* ----------- para rodar os codigos dos Scroll ----------- */
window.addEventListener("scroll", () => {
    activeLink();
    if(!mlPlayed) mlCounty();
    
});
function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num,maxNum);
        }, 12);
    }
}
/* ----------- codigo do Navbar ----------- */

function stickNavbar(){
    header.classList.toggle("scrolled",window.scrollY > 0);
 }
 
 stickNavbar();
 
 window.addEventListener("scroll", stickNavbar);

 /* ----------- scroll do link active ----------- */
 function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
        .map((sct, i) => {
            return {
                y: sct.getBoundingClientRect().top - header.offsetHeight,
                id: i,
            };
        })
        .filter((sct) => sct.y <= 0);

    // Verifica se existem seções passadas
    if (passedSections.length > 0) {
        let currSectionID = passedSections.at(-1).id;

        // Remove a classe 'active' de todos os links
        links.forEach((l) => l.classList.remove("active"));

        // Adiciona a classe 'active' ao link correspondente à seção atual
        links[currSectionID].classList.add("active");
    }
}

activeLink();

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

/* ----------- abrir e fechar navbar menu ----------- */

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});
