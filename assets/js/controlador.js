let memoria = JSON.parse(localStorage.getItem("datos"));

let contenedor = document.getElementById("contenedor");


memoria.forEach(function(cita){

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","shadow","text-center","p-5")

    let columnaUno=document.createElement("div")
    columnaUno.classList.add("col-4")

    let columnaDos=document.createElement("div")
    columnaDos.classList.add("col-8","border-start","p-4")

    let titulo=document.createElement("h1")
    titulo.textContent="CITA ASIGNADA"

    let usuario=document.createElement("h3")
    usuario.textContent= cita.usuario

    let documento=document.createElement("p")
    documento.textContent="Identificación: "+cita.documento

    let correo=document.createElement("p")
    correo.textContent="Email: "+cita.email

    let fecha=document.createElement("p")
    fecha.textContent="Fecha: "+cita.fecha

    let horario=document.createElement("p")
    horario.textContent="Hora: "+cita.hora

    let editar = document.createElement("button");
    editar.textContent = "Editar";
    editar.classList.add("btn", "btn-primary");
    editar.addEventListener("click", function() {
        mostrarVentanaModal(cita);
    });

    let eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.classList.add("btn", "btn-primary", "m-3");
    eliminar.addEventListener("click", function() {
        fila.remove(); // Elimina la fila completa al hacer clic en "Eliminar"
    });
    //padres e hijos
    columnaUno.appendChild(titulo)
    columnaDos.appendChild(usuario)
    columnaDos.appendChild(documento)
    columnaDos.appendChild(correo)
    columnaDos.appendChild(fecha)
    columnaDos.appendChild(horario)
    columnaDos.appendChild(editar);
    columnaDos.appendChild(eliminar);
    fila.appendChild(columnaUno)
    fila.appendChild(columnaDos)
    contenedor.appendChild(fila)

});

function mostrarVentanaModal(cita) {
    // Crea el contenido de la ventana modal de edición
    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.textContent = "Editar Cita";

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    let inputUsuario = document.createElement("input");
    inputUsuario.type = "text";
    inputUsuario.value = cita.usuario;

    let inputDocumento = document.createElement("input");
    inputDocumento.type = "text";
    inputDocumento.value = cita.documento;

    let inputCorreo = document.createElement("input");
    inputCorreo.type = "text";
    inputCorreo.value = cita.email;

    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.value = cita.fecha;

    let inputHorario = document.createElement("input");
    inputHorario.type = "time";
    inputHorario.value = cita.hora;

    modalBody.appendChild(inputUsuario);
    modalBody.appendChild(inputDocumento);
    modalBody.appendChild(inputCorreo);
    modalBody.appendChild(inputFecha);
    modalBody.appendChild(inputHorario);

    let modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    let guardarCambios = document.createElement("button");
    guardarCambios.textContent = "Guardar Cambios";
    guardarCambios.classList.add("btn", "btn-primary");
    guardarCambios.addEventListener("click", function() {
        // Aquí puedes agregar la lógica para guardar los cambios realizados en la cita
        cita.usuario = inputUsuario.value;
        cita.documento = inputDocumento.value;
        cita.email = inputCorreo.value;
        cita.fecha = inputFecha.value;
        cita.hora = inputHorario.value;

        // Actualiza la fila con los nuevos valores
        usuario.textContent = cita.usuario;
        documento.textContent = "Identificación: " + cita.documento;
        correo.textContent = "Email: " + cita.email;
        fecha.textContent = "Fecha: " + cita.fecha;
        horario.textContent = "Hora: " + cita.hora;

        // Cierra la ventana modal
        modal.style.display = "none";
    });
}

    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild