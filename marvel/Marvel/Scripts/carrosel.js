document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const slides = document.querySelectorAll(".slide");
 
    let counter = 0;
    const slideWidth = slides[0].clientWidth;
 
    setInterval(() => {
      carouselInner.style.transition = "transform 0.5s ease-in-out";
      carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;
      counter++;
 
      if (counter === slides.length) {
        setTimeout(() => {
          carouselInner.style.transition = "none";
          carouselInner.style.transform = "translateX(0)";
          counter = 0;
        }, 500);
      }
    }, 3000);
  });
 