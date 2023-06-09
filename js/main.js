const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const indicadores = document.querySelector('.indicadores');
let posicionActual = 0;


// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth / 5;
  posicionActual++;
  actualizarIndicadores();
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth / 5;
  posicionActual--;
  actualizarIndicadores();
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
  const indicador = document.createElement('button');
  indicador.classList.add('indicador');
  if (i % 3 === 0) {
    indicador.classList.add('rojo');
  }
  if(i === 0){
    indicador.classList.add('activo');
  }
  indicadores.appendChild(indicador);

  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;
    posicionActual = i;
    actualizarIndicadores();
  });
}

function actualizarIndicadores() {
  const indicadores = document.querySelectorAll('.indicador');
  indicadores.forEach((indicador, i) => {
    if (i === posicionActual) {
      indicador.classList.add('activo');
    } else {
      indicador.classList.remove('activo');
    }
  });

  const indiceLineaRoja = Math.floor(posicionActual / 3);
  const lineas = document.querySelectorAll('.indicadores .linea');
  lineas.forEach((linea, i) => {
    if (i === indiceLineaRoja) {
      linea.classList.add('rojo');
    } else {
      linea.classList.remove('rojo');
    }
  });
}

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
