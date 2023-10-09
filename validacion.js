/*----------------------Carrusel de imagenes------------------------*/
 // JavaScript para el carrusel
 const carruselItems = document.querySelector('.carrusel-items');
 const carruselButtonAnterior = document.getElementById('anterior');
 const carruselButtonSiguiente = document.getElementById('siguiente');
 const carruselItemWidth = document.querySelector('.carrusel-item').clientWidth;
 let currentPosition = 0;

 carruselButtonAnterior.addEventListener('click', () => {
     if (currentPosition > 0) {
         currentPosition -= carruselItemWidth;
         carruselItems.style.transform = `translateX(-${currentPosition}px)`;
     }
 });

 carruselButtonSiguiente.addEventListener('click', () => {
     const numItems = document.querySelectorAll('.carrusel-item').length;
     if (currentPosition < (numItems - 1) * carruselItemWidth) {
         currentPosition += carruselItemWidth;
         carruselItems.style.transform = `translateX(-${currentPosition}px)`;
     }
 });