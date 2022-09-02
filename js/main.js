document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 200,
    perView: 3
  }).mount();

  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");
  

  let prevWrapperBtn = document.getElementById("prev-wrapper");
  let nextWrapperBtn = document.getElementById("next-wrapper");
  let background = document.querySelector(".background");
  let indices = document.querySelectorAll(".index");

  let bgImgs = ["rurrenabaque.jpg", "Casa-de-la-Libertad.jpg", "Cochabamba.jpg", "LaPaz.jpg","Oruro.jpg","Pando.jpg","Potosi.png","SantaCruz.jpg","Tarija.jpg"];

  let currentIndex = 0;

  indices.forEach(index => index.classList.remove("active"));
  indices[currentIndex].classList.add("active");

  var myAnimation = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[0]}`,
    image2: `assets/img/${bgImgs[1]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });

  var myAnimation2 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[1]}`,
    image2: `assets/img/${bgImgs[2]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });

  var myAnimation3 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[2]}`,
    image2: `assets/img/${bgImgs[3]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });

  var myAnimation4 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[3]}`,
    image2: `assets/img/${bgImgs[4]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });
  var myAnimation5 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[4]}`,
    image2: `assets/img/${bgImgs[5]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });

  var myAnimation6 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[5]}`,
    image2: `assets/img/${bgImgs[6]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });

  var myAnimation7 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[6]}`,
    image2: `assets/img/${bgImgs[7]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });

  var myAnimation8 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[7]}`,
    image2: `assets/img/${bgImgs[8]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });
  var myAnimation9 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `assets/img/${bgImgs[8]}`,
    image2: `assets/img/${bgImgs[0]}`,
    displacementImage: "assets/img/14.jpg",
    hover: false
  });
  let distortAnimations = [
    myAnimation,
    myAnimation2,
    myAnimation3,
    myAnimation4,
    myAnimation5,
    myAnimation6,
    myAnimation7,
    myAnimation8,
    myAnimation9,
  ];

  function startNextDistortAnimation() {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 9;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[prevIndex].next();
    showTextAnimation("next");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortAnimations[prevIndex].previous();
    }, 1200);
  }

  function startPrevDistortAnimation() {
    currentIndex = currentIndex - 1 < 0 ? 8 : currentIndex - 1;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[currentIndex].next();
    showTextAnimation("prev");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.insertBefore(canvas[canvas.length - 1], background.firstChild);
      distortAnimations[currentIndex].previous();
    }, 500);
  }

  nextBtn.addEventListener("click", () => {
    
    startNextDistortAnimation();
    nextBtn.style.pointerEvents='none';
    prevBtn.style.pointerEvents='none';
    nextBtn.style.opacity='0.6';
    prevBtn.style.opacity='0.6';
    setTimeout(() => {
      nextBtn.style.pointerEvents='all';
      prevBtn.style.pointerEvents='all';
      nextBtn.style.opacity='1';
      prevBtn.style.opacity='1';

    }, 1200);
  });

  prevBtn.addEventListener("click", () => {
    startPrevDistortAnimation();
    prevBtn.style.pointerEvents='none'
    nextBtn.style.pointerEvents='none'
    nextBtn.style.opacity='0.6';
    prevBtn.style.opacity='0.6';
    setTimeout(() => {
      nextBtn.style.pointerEvents='all'
      prevBtn.style.pointerEvents='all';
      nextBtn.style.opacity='1';
      prevBtn.style.opacity='1';
    }, 1200);
  });

  nextWrapperBtn.addEventListener("click", () => {
    
    startNextDistortAnimation();
    nextWrapperBtn.style.pointerEvents='none';
    prevWrapperBtn.style.pointerEvents='none';
    nextWrapperBtn.style.opacity='0.6';
    prevWrapperBtn.style.opacity='0.6';
    setTimeout(() => {
      nextWrapperBtn.style.pointerEvents='all';
      prevWrapperBtn.style.pointerEvents='all';
      nextWrapperBtn.style.opacity='1';
      prevWrapperBtn.style.opacity='1';

    }, 1200);
  });

  prevWrapperBtn.addEventListener("click", () => {
    startPrevDistortAnimation();
    prevWrapperBtn.style.pointerEvents='none'
    nextWrapperBtn.style.pointerEvents='none'
    nextWrapperBtn.style.opacity='0.6';
    prevWrapperBtn.style.opacity='0.6';
    setTimeout(() => {
      nextWrapperBtn.style.pointerEvents='all'
      prevWrapperBtn.style.pointerEvents='all';
      nextWrapperBtn.style.opacity='1';
      prevWrapperBtn.style.opacity='1';
    }, 1200);
  });
  let titleDisplacement = 0;
  let descriptionDisplacement = 0;

  function showTextAnimation(direction) {
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    if(x>550){
      if (titleDisplacement === 0 && direction === "prev") {
        titleDisplacement = -90;
      } else if (titleDisplacement === -90 && direction === "next") {
        titleDisplacement = 0;
      } else {
        titleDisplacement =
          direction === "next"
            ? titleDisplacement - 11.25
            : titleDisplacement + 11.25;
      }
  
    }
    else{
      if (titleDisplacement === 0 && direction === "prev") {
        titleDisplacement = -90;
      } else if (titleDisplacement === -90 && direction === "next") {
        titleDisplacement = 0;
      } else {
        titleDisplacement =
          direction === "next"
            ? titleDisplacement - 11.25
            : titleDisplacement + 11.25;
      }
  
    }
    // 180 * 8 = 1440
    // 105 * 8 = 760
    if(x > 750){

      if (descriptionDisplacement === 0 && direction === "prev") {
        descriptionDisplacement = -1280;
      } 
      else if(descriptionDisplacement === -1280 && direction === "next"){
        descriptionDisplacement = 0;
      }
      else {
        descriptionDisplacement =
          direction === "next" 
            ? descriptionDisplacement - 160
            : descriptionDisplacement + 160;
      }
    }
    else{
      if (descriptionDisplacement === 0 && direction === "prev") {
        descriptionDisplacement = -1280;
      } 
      else if(descriptionDisplacement === -1280 && direction === "next"){
        descriptionDisplacement = 0;
      }
      else {
        descriptionDisplacement =
          direction === "next" 
            ? descriptionDisplacement - 160
            : descriptionDisplacement + 160;
      }
    }


    
    let title = document.querySelectorAll("#title h4");
    let description = document.querySelectorAll("#description p");

    title.forEach(title => {
      TweenMax.to(title, 1, {
        top: `${titleDisplacement}rem`,
        ease: Strong.easeInOut
      });
    });
    description.forEach((description, index) => {
      let opacity = 0;
      if(index === currentIndex){
        opacity = 1;
      }else {
        opacity = 0;
      }
      TweenMax.to(description, 1, {
        top: `${descriptionDisplacement}px`,
        ease: Strong.easeInOut,
        opacity: opacity
      });
    })
  }
});

