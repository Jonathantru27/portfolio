import "./src/styles/_reset.css";
import "./src/styles/_variables.css";
import "./src/styles/_main.css";
import "./src/styles/components/navbar.css";
import "./src/styles/components/hero.css";
import "./src/styles/components/about.css";
import "./src/styles/components/experience.css";
import "./src/styles/components/education.css";
import "./src/styles/components/gallery.css";
import "./src/styles/components/contact.css";
import "./src/styles/components/footer.css";

const menuToggle = document.querySelector(".header__menu-toggle");
const menu = document.querySelector(".header nav");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("nav--active");
});

const mediaQuery = window.matchMedia("(min-width: 1024px)");

function handleMediaChange(e) {
  if (e.matches) {
    // Si la pantalla es menor o igual a 768px
    menu.classList.remove("nav--active");
  }
}

mediaQuery.addEventListener("change", handleMediaChange);

// Selecciona los elementos que quieres animar
const heroTitles = document.getElementById("heroTitles");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroDescription = document.getElementById("heroDescription");
const aboutInfo = document.querySelector(".about__info");

// Función para añadir la clase de animación
function animateElement(element, animationClass) {
  element.classList.add(animationClass);
}

// Configura el Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Añade animaciones a los elementos
      animateElement(heroTitles, "animate__fadeInUp");
      animateElement(heroSubtitle, "animate__fadeInUp");
      animateElement(heroDescription, "animate__fadeInUp");
      // Si solo quieres que la animación ocurra una vez, puedes dejar de observar el elemento
      observer.unobserve(entry.target);
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Añade animaciones a los elementos
      animateElement(aboutInfo, "animate__fadeInUp");
      // Si solo quieres que la animación ocurra una vez, puedes dejar de observar el elemento
      observer2.unobserve(entry.target);
    }
  });
});

// Comienza a observar el elemento
observer.observe(document.getElementById("hero"));
observer2.observe(document.querySelector(".about__info"));

function imprimirMensaje() {
  console.log("SOY LA VENGANZA");
  console.log(`          .  .
          |\\_|\\
          | a_a\\
          | | "] 
      ____| '-\\___
     /.----.___.-'\\
    //        _    \\
   //   .-. (~v~) /|
  |'|  /\\:  .--  / \\
 // |-/  \\_/____/\\/~| 
|/  \\ |  []_|_|_] \\ |
| \\  | \\ |___   _\\ ]_}
| |  '-' /   '.'  |
| |     /    /|:  | 
| |     |   / |:  /\\
| |     /  /  |  /  \\
| |    |  /  /  |    \\
\\ |    |/\\/  |/|/\\    \\
 \\|\\ |\\|  |  | / /\\/\\__\\
  \\ \\| | /   | |__
snd    / |   |____)
       |_/
`);
}

window.imprimirMensaje = imprimirMensaje;
