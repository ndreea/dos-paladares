
// MENÚ DE NAVEGACIÓN

// Activar los botones cada vez que se haga click en ellos
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-menu .btn");
    const sections = document.querySelectorAll(".productos");

    // Nos aseguramos que el menú se desplace hacia la izquierda si el botón activo está oculto
    const activeItem = document.querySelector(".nav-menu .active");
    const navMenu = document.querySelector(".nav-menu");

    if (activeItem && navMenu) {
      const activeOffset = activeItem.offsetLeft;
      navMenu.scrollLeft = activeOffset - 20; // Ajusta el valor si es necesario
    }

    /*
    //Aseguramos que el "active" se vea
    const activeItem = document.querySelector(".nav-menu .active");
      if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    */

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            // Remueve la clase "active" de todos los botones y secciones
            buttons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Agrega la clase "active" al botón y la sección correspondiente
            this.classList.add("active");
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Hace scroll hasta el menú para mantenerlo visible
            document.querySelector(".nav").scrollIntoView({ behavior: "smooth" });
        });
    });
});


/*-----------------------------------------------*/


/* Deslizar el menú con el mouse o touch en dispositivos:
1. Desplazar el menú con la rueda del mouse
2. El usuario puede arrastrar con el dedo en móviles para desplazaese horizontalmente */
const navMenu = document.querySelector('.nav-menu');
let isDown = false;
let startX;
let scrollLeft;

// Desplaza horizontalmente con la rueda del mouse
navMenu.addEventListener('wheel', (event) => {
  event.preventDefault();
  navMenu.scrollLeft += event.deltaY;
});

// Desplaza horizontalmente con el dedo en móviles
navMenu.addEventListener('touchstart', (event) => {
  isDown = true;
  startX = event.touches[0].pageX - navMenu.offsetLeft;
  scrollLeft = navMenu.scrollLeft;
});

navMenu.addEventListener('touchmove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.touches[0].pageX - navMenu.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del scroll
  navMenu.scrollLeft = scrollLeft - walk;
});

navMenu.addEventListener('touchend', () => {
  isDown = false;
});

