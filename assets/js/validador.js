const button = document.querySelector('#button'); 

let campoNombre, campoApellido, campoEmail, campoTelefono, campoFecha, campoMensaje, cajaDoc; 



campoNombre = document.querySelector('#nombre');

campoApellido = document.querySelector('#apellido');

cajaDoc = document.querySelector('#doc');

campoEmail = document.querySelector('#email');

 campoTelefono = document.querySelector('#tel');

campoFecha= document.querySelector('#fecha');

campoMensaje = document.querySelector('#message');



    button.addEventListener('click', function(evento){
            evento.preventDefault();            
            let usuario = campoNombre.value; 
            let apellido =  campoApellido.value;
            let documento = cajaDoc.value; 
            let email = campoEmail.value; 
            let telefono = campoTelefono.value; 
            let fecha = campoFecha.value; 
            let message = campoMensaje.value; 
            //console.log(`El nombre del usuario es: ${usuario} \nEl apellido del usuario es: ${apellido} \nEl documento del usuario es ${documento} \nEl telefono del usuario es ${telefono}\nLa fecha es ${fecha} el mensaje es ${message}`);

            let errores = []; //Se crea arreglo para recorrer los errores.
            let citas; 
            let datosMemoria = JSON.parse(localStorage.getItem('datos')) 

            if(!datosMemoria) {
                citas=[];
            } else {
                citas = datosMemoria; 
            }

            if(!usuario) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoNombre, 'El nombre debe ser obligatorio'); 
            }

            if(!apellido) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoApellido, 'El apellido debe ser obligatorio'); 
            }

            if(!documento) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(cajaDoc, 'El documento debe ser obligatorio'); 
            }

            if(!email) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoEmail, 'el email debe ser obligatorio'); 
            }

            if(!telefono) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoTelefono, 'el telefono es '); 
            }

            if(!fecha) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoFecha); 
            }

            if(!fecha) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoFecha, 'Debe ser obligatori'); 
            }
            if(!message) {
                errores.push('El nombre debe ser obligatorio'); 
                alertaCampo(campoMensaje); 
            }
    })


    function alertaCampo(campo, mensaje) {
        campo.classList.add('error')

        const mensajeError = document.createElement('SPAN'); 
        mensajeError.classList.add('mensaje-error');
        mensajeError.textContent=mensaje; 

        // Agregar el mensaje de error al DOM
        campo.parentNode.appendChild(mensajeError);
    };
   
    