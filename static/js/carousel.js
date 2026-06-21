document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.hero-carousel').forEach(function (carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let activeIndex = 0;

    function setActive(index) {
      slides.forEach(function (slide, idx) {
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
});
