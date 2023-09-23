/*----------------------Carrusel de imagenes------------------------*/
const carrusel = document.getElementById("carrusel");
const slides = document.querySelectorAll(".slide");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
let currentIndex = 0;

anterior.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    actualizarCarrusel();
});

siguiente.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    actualizarCarrusel();
});

function actualizarCarrusel() {
    const translateX = -currentIndex * 100;
    carrusel.style.transform = `translateX(${translateX}%)`;
}
/*---------------Validaciones Formulario---------------------*/