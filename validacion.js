/*-----------------------------Validacion formulario-------------------------------*/

    /*var emailpattern = /^\w+@\w+(\.\w{2,4})+$/;
    var formpattern = /^[a-zA-Z]+$/;*/

    function validar(){
        let nombre = document.getElementById('fnombre');
        let apellido = document.getElementById('fapellido');
        let email = document.getElementById('femail');
        let mensaje = document.getElementById('mensaje');

        /*Creamos un array que almacene los errores*/
        let errors = [];

        /*2 formas de validar:
        1- todos dentro de un if:*/
        if(!nombre || !apellido || !email || !mensaje){
            errors.push('Todos los campos son obligatorios')
        }
        /*validamos cada uno de los campos*/

        if(errors.length > 0){
            let errorElement = document.getElementById('errorInput');
            errorElement.innerHTML = '';
            errors.forEach(function(error){
                let li = document.createElement('li');
                li.textContent = error;
                errorElement.appendChild(li);
            });
            return false;
        }
    }
    /*
        let msj = `Hola ${nombre} ${apellido}, ¡Muchas gracias por su msj`;
        pEnviar.innerHTML = msj;/*es el espacio de abajo*/ 
    /*    return false; */
