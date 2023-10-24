function validar(){
    let nombre = document.getElementById('fnombre').value;
    let apellido = document.getElementById('fapellido').value;
    let email = document.getElementById('femail').value;
    let mensaje = document.getElementById('mensaje').value;

    let errors = [];

    if(!nombre || !apellido || !email ){
        errors.push('Todos los elementos son obligatorios');
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
}