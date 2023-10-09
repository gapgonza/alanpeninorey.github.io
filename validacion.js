/*----------------------Carrusel de imagenes------------------------*/
    const carruselItems = document.querySelector('.carrusel-items');//almacenamos los elementos
    const carruselButtonAnterior = document.getElementById('anterior');//boton anterior
    const carruselButtonSiguiente = document.getElementById('siguiente'); //boton siguiente
    //fija el ancho del elemento
    const carruselItemWidth = document.querySelector('.carrusel-item').clientWidth;
    //totla los elementos
    const numItems = document.querySelectorAll('.carrusel-item').length;
    let currentPosition = 0; //posicion actual del carrusel

    //estas funciones controlan los eventos de los botones
    carruselButtonAnterior.addEventListener('click', () => {
        if (currentPosition > 0) {
            //si no estamos en la primer imagen volvemos
            currentPosition -= carruselItemWidth;
        } else {
            //lo mismo si estamo s en la primera, vamos a la ultima para girar
            currentPosition = (numItems - 1) * carruselItemWidth;
        }
        //una especie de transformacion para mover
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
    /*-----------------------------Validacion formulario-------------------------------*/

    function enviarFormulario() {
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;

    }
