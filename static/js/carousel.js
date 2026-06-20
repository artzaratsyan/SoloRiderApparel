document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('#heroCarousel .carousel-slide');
  const prev = document.querySelector('#heroCarousel .prev');
  const next = document.querySelector('#heroCarousel .next');
  let activeIndex = 0;

  function setActive(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
    activeIndex = index;
  }

  function showNext() {
    setActive((activeIndex + 1) % slides.length);
  }

  function showPrev() {
    setActive((activeIndex - 1 + slides.length) % slides.length);
  }

  next?.addEventListener('click', showNext);
  prev?.addEventListener('click', showPrev);

  if (slides.length > 0) {
    setActive(activeIndex);
    setInterval(showNext, 8000);
  }
});
