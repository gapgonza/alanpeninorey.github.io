/*----------------------Carrusel de imagenes------------------------*/
const carrusel = document.querySelector('.carrusel-items');
let intervalo = null;

const start = () => {
  intervalo = setInterval(function(params){
    carrusel.scrollLeft = carrusel.scrollLeft + 20;
  },10);
};

const stop = () => {};

start();
/*---------------Validaciones Formulario---------------------*/
