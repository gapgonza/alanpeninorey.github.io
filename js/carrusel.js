// const carruselItems = document.querySelector('.carrusel-items');//almacenamos los elementos
//     const carruselButtonAnterior = document.getElementById('anterior');//boton anterior
//     const carruselButtonSiguiente = document.getElementById('siguiente'); //boton siguiente
//     //fija el ancho del elemento
//     const carruselItemWidth = document.querySelector('.carrusel-item').clientWidth;
//     //totla los elementos
//     const numItems = document.querySelectorAll('.carrusel-item').length;
//     let currentPosition = 0; //posicion actual del carrusel

//     //estas funciones controlan los eventos de los botones
//     carruselButtonAnterior.addEventListener('click', () => {
//         if (currentPosition > 0) {
//             //si no estamos en la primer imagen volvemos
//             currentPosition -= carruselItemWidth;
//         } else {
//             //lo mismo si estamo s en la primera, vamos a la ultima para girar
//             currentPosition = (numItems - 1) * carruselItemWidth;
//         }
//         //una especie de transformacion para mover
//         carruselItems.style.transform = `translateX(-${currentPosition}px)`;
//     });

//     carruselButtonSiguiente.addEventListener('click', () => {
//         if (currentPosition < (numItems - 1) * carruselItemWidth) {
//             currentPosition += carruselItemWidth;
//         } else {
//             currentPosition = 0;
//         }
//         carruselItems.style.transform = `translateX(-${currentPosition}px)`;
//     });

const imagenes = [
    'images/Carga de Productos.png',
    'images/Empresa-Empleados1.png',
    'images/GestionProductos1.png',
    'images/GestionProductos2.png',
    'images/GestionProductos3.png',
    'images/logginGUI.png',
    'images/logginGUI2.png',
    'images/logginGUI3.png',
    'images/logginGUI4.png',
    'images/Traductor1.png',
];

const descripciones = [
    'App GUI realizada en Java, la cual permite la carga de productos, ordenados por categoria, nombre y precio.',
    'Vista de lo principal',
    'Menu principal vista de app GUI',
    'Muestra Gestion de productos',
    'Muestra de consultas',
    'Primera vista del Loggin',
    'Ejemplo de muestra de funcionamiento',
    'Otro modelo de Loggin ',
    'Modelo extra de la aplicacion GUI',
    'Un pequeño traductor de ejemplo de funcionamiento'
];

let posicionActual = 0;

const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
const imagen = document.querySelector('.carrusel-item img');
const descripcion = document.querySelector('.carrusel-item p');

botonAnterior.addEventListener('click', function() {
    posicionActual--;
    if (posicionActual < 0) {
        posicionActual = imagenes.length - 1;
    }
    imagen.src = imagenes[posicionActual];
    descripcion.textContent = descripciones[posicionActual];
});

botonSiguiente.addEventListener('click', function() {
    posicionActual++;
    if (posicionActual >= imagenes.length) {
        posicionActual = 0;
    }
    imagen.src = imagenes[posicionActual];
    descripcion.textContent = descripciones[posicionActual];
});