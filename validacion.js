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

    function validar() {
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        var telefono = document.getElementById('telefono');
        var mensaje = document.getElementById('mensaje');

        // Limpiar errores previos
        nombre.classList.remove('error');
        apellido.classList.remove('error');
        email.classList.remove('error');
        telefono.classList.remove('error');
        mensaje.classList.remove('error');

        var errores = [];

        // Validar nombre
        if (nombre.value === '') {
            errores.push('Nombre es obligatorio');
            nombre.classList.add('error');
        }

        // Validar apellido
        if (apellido.value === '') {
            errores.push('Apellido es obligatorio');
            apellido.classList.add('error');
        }

        // Validar email
        if (email.value === '') {
            errores.push('Email es obligatorio');
            email.classList.add('error');
        }

         // Validar teléfono
         if (telefono.value !== '' && (isNaN(telefono.value) || telefono.value.length !== 10 || telefono.value.startsWith('0'))) {
             errores.push('Teléfono debe ser un número de 10 dígitos y no puede comenzar con cero');
             telefono.classList.add('error');
         }

         // Validar mensaje
         if (mensaje.value === '') {
             errores.push('Mensaje es obligatorio');
             mensaje.classList.add('error');
         }

         // Mostrar errores
         errores.forEach(function(error) {
             var li = document.createElement('li');
             li.textContent = error;
             document.getElementById('mensajes').appendChild(li);
         });

         // Si no hay errores, agregar mensaje a la lista
         if (errores.length === 0) {
             var mensajeFinal = 'Hola ' + nombre.value + ' ' + apellido.value + ', ';
             if (telefono.value !== '') {
                 mensajeFinal += 'te llamaremos al ' + telefono.value + '. ';
             }
             mensajeFinal += 'Tu mensaje fue: ' + mensaje.value;
             
             var li = document.createElement('li');
             li.textContent = mensajeFinal;
             document.getElementById('mensajes').appendChild(li);

             // Limpiar campos del formulario
             nombre.value = '';
             apellido.value = '';
             email.value = '';
             telefono.value = '';
             mensaje.value = '';
         }

         return false;  // Prevenir el envío del formulario
     }