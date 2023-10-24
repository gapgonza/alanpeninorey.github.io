function validar(){
    let nombre = document.getElementById('fnombre').value;
    let apellido = document.getElementById('fapellido').value;
    let email = document.getElementById('femail').value;
    let mensaje = document.getElementById('mensaje').value;

    let errors = [];

    /*Para validar todos los campos solos*/
    /*if(!nombre || !apellido || !email ){
        errors.push('Todos los elementos son obligatorios');
    }*/

    if(nombre == ""){
        errors.push('Falta el Nombre')
    }
    if(apellido == ""){
        errors.push('Falta el Apellido')
    }
    if(email == ""){
        errors.push('Debe escribir un email valido')
    }

     /*Validación de uso de expresiones regulares (por ejemplo, para validar el formato del correo electrónico)*/
    let patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!patronCorreo.test(email)) {
        errors.push('El correo electrónico no es válido.');
    }

    if(errors.length>0){
        let errorElement = document.getElementById('errorInput');
        errorElement.innerHTML = '';
        errors.forEach(function(error){
            let li = document.createElement('li');
            li.textContent = error;
            errorElement.appendChild(li);
        });
        return false;
    }

        let msj = `Hola ${nombre} ${apellido}, ¡Muchas gracias por su msj`;
        pEnviar.innerHTML = msj;/*es el espacio de abajo*/ 
        return false;
}