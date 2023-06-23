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
    function editarOpen (){
        let editarOverlay= editar.classList.add('click');
        let editarModal = document.getElementById('click');
  editarOverlay.style.display = 'block';
  editarModal.style.display = 'block';
  console.log(1)
    }

    let cancelar = document.createElement("button");
    cancelar.textContent = "Cancelar";
    cancelar.classList.add("btn", "btn-primary", "m-3");



    

    //padres e hijos
    columnaUno.appendChild(titulo)
    columnaDos.appendChild(usuario)
    columnaDos.appendChild(documento)
    columnaDos.appendChild(correo)
    columnaDos.appendChild(fecha)
    columnaDos.appendChild(horario)
    columnaDos.appendChild(editar);
    columnaDos.appendChild(cancelar);
    fila.appendChild(columnaUno)
    fila.appendChild(columnaDos)
    contenedor.appendChild(fila)

});

