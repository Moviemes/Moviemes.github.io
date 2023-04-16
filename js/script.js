const swiper = new Swiper(".swiper-container",{
  effect:"coverflow",
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect:{
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  pagination:{
    el:".swiper-pagination"
  }

})


// Agrega esto al final del archivo JavaScript
const slides = document.querySelectorAll(".swiper-slide");

slides.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    const link = e.currentTarget.getAttribute("data-link");
    window.location.href = link;
  });
});


const pagination = document.querySelectorAll('.swiper-pagination-bullet');

pagination.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    swiper.slideTo(index);
  });
});
