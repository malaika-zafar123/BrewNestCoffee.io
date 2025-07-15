const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${i * 100}%)`;
}

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

showSlide(index);