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

    var emailpattern = /^\w+@\w+(\.\w{2,4})+$/;
    var formpattern = /^[a-zA-Z]+$/;

    const btnenviar = document.getElementById("btnenviar");
    const ltaErrores = document.getElementById("ltaErrores");
    function validar(){
        let fnombre = document.getElementById("fnombre");
        let nombre = fnombre.value.trim();

        let fapellido = document.getElementById("fapellido");
        let apellido = fapellido.value.trim();

        let femail = document.getElementById("femail");
        let email = femail.value;

        let ftelefono = document.getElementById("ftelefono");
        let telefono = ftelefono.value;

        let fmensaje = document.getElementById("fmensaje");
        let mensaje = fmensaje.value;

        let errores = [];
        let campo_error = null;

        let FormularioDeContacto = document.getElementById("FormularioDeContacto");

        for (v of FormularioDeContacto.querySelectorAll("input,div")) {
            v.classList.remove("error");
           }

        if(nombre == ""){
            errores.push("Falta el nombre");
            campo_error = fnombre;
            fnombre.classList.add("error");
        }
        if(apellido == ""){
            errores.push("Falta el apellido");
            campo_error = fapellido;
            fapellido.classList.add("error");
        }
        if(email == ""){
            errores.push("Falta el email");
            campo_error = femail;
            femail.classList.add("error");
        }
        if(telefono == ""){
            errores.push("Falta el telefono");
            campo_error = ftelefono;
            ftelefono.classList.add("error");
        }

        ltaErrores.innerHTML = "";
        if(errores.length > 0){
            for(let i=0;i<errores.length;i++){
                let li=document.createElement("li");
                li.innerHTML=errores[i];
                ltaErrores.appendChild(li);
            }
            if(campo_error !=null){
                campo_error.focus();
            }
            return false;
        }
        let msj = `Hola ${nombre} ${apellido}, ¡Muchas gracias por su msj`;
        pEnviar.innerHTML = msj;
        return false;
}