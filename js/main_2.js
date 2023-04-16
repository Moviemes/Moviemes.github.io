const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');
let posicionActual = 0;
const indiceLineaRoja = Math.floor(posicionActual / 3);
const lineas = document.querySelectorAll('.indicadores .linea');

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
  pelicula.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
  peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


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
