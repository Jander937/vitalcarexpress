const button = document.querySelector('#button'); 

let campoNombre, campoApellido, campoEmail, campoTelefono, campoFecha, campoMensaje, cajaDoc; 



campoNombre = document.querySelector('#nombre');

campoApellido = document.querySelector('#apellido');

cajaDoc = document.querySelector('#doc');

//campoEmail = document.querySelector('#email');

 //campoTelefono = document.querySelector('#tel');

//campoFecha= document.querySelector('#fecha');

//campoMensaje = document.querySelector('#message');



    button.addEventListener('click', function(evento){

        
            evento.preventDefault();
            
            let usuario = campoNombre.value; 
            let apellido =  campoApellido.value;
            let documento = cajaDoc.value; 
            let email = campoEmail.value; 
            //let telefono = campoTelefono.value; 
            //let fecha = campoFecha.value; 
            //let message = campoMensaje.value; 

            console.log(`El nombre del usuario es: ${usuario} \nEl apellido del usuario es: ${apellido} \nEl documento del usuario es ${documento}`);
    })