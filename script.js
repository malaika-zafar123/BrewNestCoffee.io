const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  if (i < 0) {
    index = slide.length - 1;
  } else if (i >= slide.length) {
    index = 0;
  } else {
    index = i;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  showSlide(index - 1);
});

next.addEventListener('click', () => {
  showSlide(index + 1);
});

// Auto Slide (5 sec)
setInterval(() => {
  showSlide(index + 1);
}, 5000);

// First slide
showSlide(index);


//  menu-button 



function toggleMenu() {
  const menu = document.getElementById("menu");
  const slider = document.querySelector(".slider");

  menu.classList.toggle("show");
  slider.classList.toggle("move-down"); // text ko neeche push karega
}

