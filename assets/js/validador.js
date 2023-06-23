let button = document.querySelector('#button'); 

let campoNombre = document.querySelector('#usuario'); 
let campoApellido = document.querySelector('#apellido');
let campoDocumento  = document.querySelector('#doc'); 
let campoEmail = document.querySelector('#correo');
let campoTelefono = document.querySelector('#telefono');
let campoFecha = document.querySelector('#fecha'); 
let campoHora = document.querySelector('#hora'); 

// Programar Funcion. 

button.addEventListener('click', function(evento) {
    evento.preventDefault();
    let usuario = campoNombre.value; 
    let apellido = campoApellido.value; 
    let documento = campoDocumento.value; 
    let email = campoEmail.value; 
    let telefono = campoTelefono.value; 
    let fecha = campoFecha.value; 
    let hora = campoHora.value; 

    let errores=[];
    let citas;
    let datosMemoria= JSON.parse(localStorage.getItem('datos')) 

    if(!datosMemoria) {
        citas=[];
    } else {
        citas = datosMemoria; 
    }
    
    if(!usuario){
    errores.push('El nombre debe ser obligatorio'); 
    campoNombre.classList.add("error");
    campoNombre.classList.add("is-invalid"); 
    document.getElementById('errorUsuario').textContent = 'El campo nombre debe ser obligatorio';
    } else if(usuario.length < 10) {
        campoNombre.classList.add("is-invalid")
        document.getElementById('errorUsuario').textContent = 'El Nombre debe tener minimo 10 caracteres';    
    }

    if(!apellido){
        errores.push('El apellido debe ser obligatorio'); 
        campoApellido.classList.add("is-invalid")
        document.getElementById('errorApellido').textContent = 'El campo apellido debe ser obligatorio';
    } else if (apellido.length < 10) {
        campoApellido.classList.add("is-invalid")
        document.getElementById('errorApellido').textContent = 'El apellido debe tener minimo 10 caracteres';    
    }

    if(!documento){
        errores.push('El documento debe ser obligatorio'); 
        campoDocumento.classList.add("is-invalid")
        document.getElementById('errorDocumento').textContent = 'El campo documento debe ser obligatorio';
    }

    if(!email){
        errores.push('El correo debe ser obligatorio'); 
        campoEmail.classList.add("is-invalid")
        document.getElementById('errorCorreo').textContent = 'El campo correo debe ser obligatorio';
    }  else if (!validarEmail(email)) {
        errores.push('El correo debe ser obligatorio')
        campoEmail.classList.add("is-invalid")
        document.getElementById('errorCorreo').textContent = 'El correo electrónico no es válido';
    }

    if(!telefono){
        errores.push('El telefono debe ser obligatorio'); 
        campoTelefono.classList.add("is-invalid")
        document.getElementById('errorTel').textContent = 'El campo Telefono debe ser obligatorio';
        }

     if(!fecha){
            errores.push('La fehca debe ser obligatoria'); 
            campoFecha.classList.add("is-invalid")
            document.getElementById('errorFecha').textContent = 'El campo fecha debe ser obligatorio';
         }

     if(hora=='Seleccione una hora'){
            errores.push('La hora debe ser obligatoria'); 
            campoHora.classList.add("is-invalid")
            document.getElementById('errorHora').textContent = 'El campo hora debe ser obligatorio';
         }

        
         if(errores.length == 0) {
            let datosEnvios = {
                usuario,
                apellido,
                documento,
                email,
                telefono,
                fecha,
                hora
            }
            citas.push(datosEnvios)
            localStorage.setItem('datos', JSON.stringify(citas))
         }   
})

function validarEmail(email){
    const regularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularEmail.test(email)
}