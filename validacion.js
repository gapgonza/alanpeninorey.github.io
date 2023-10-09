/*----------------------Carrusel de imagenes------------------------*/
    const carruselItems = document.querySelector('.carrusel-items');
    const carruselButtonAnterior = document.getElementById('anterior');
    const carruselButtonSiguiente = document.getElementById('siguiente');
    const carruselItemWidth = document.querySelector('.carrusel-item').clientWidth;
    const numItems = document.querySelectorAll('.carrusel-item').length;
    let currentPosition = 0;

    carruselButtonAnterior.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition -= carruselItemWidth;
        } else {
            currentPosition = (numItems - 1) * carruselItemWidth;
        }
        carruselItems.style.transform = `translateX(-${currentPosition}px)`;
    });

    carruselButtonSiguiente.addEventListener('click', () => {
        if (currentPosition < (numItems - 1) * carruselItemWidth) {
            currentPosition += carruselItemWidth;
        } else {
            currentPosition = 0;
        }
        carruselItems.style.transform = `translateX(-${currentPosition}px)`;
    });

