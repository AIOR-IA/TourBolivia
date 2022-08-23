const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;
slide = (direction) => {
    if(translate == 0 && direction === "prev" || translate == -800 && direction === "next"){
        if(direction === "prev") translate=0;
        if(direction === "next") translate= -800;
    }
    else{
        direction === "next" ? translate -= translateAmount : translate += translateAmount;
    }
    console.log(translate);
        if(translate >= -800 && translate <= 0){    
        pages.forEach( pages =>{
                pages.style.transform = `translateX(${translate}%)`

        });
    }
}



const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-main-navbar ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("a-active");
    if (li.classList.contains(current)) {
      li.classList.add("a-active");
    }
  });
};

let navToggle = document.querySelector(".btn-toggle");
let navMenu = document.querySelector(".closed-toggle");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open-toggle");
  // navToggle.style.rotate=  90 + 'deg';
  if (navMenu.classList.contains("open-toggle")) {
  navToggle.style.rotate=  90 + 'deg';
  navToggle.style.color= '#35FCD0';

    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.style.color= '#fff';
  navToggle.style.rotate=  0 + 'deg';
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
