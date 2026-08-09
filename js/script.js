const inputTarea = document.querySelector(".input-tarea")

const inputDescripcion = document.querySelector(".input-descripcion")

const buttonAgregar = document.querySelector(".button-agregar")

const listaTareas = document.querySelector(".lista-tareas")

function agregarTareas(event){
    event.preventDefault();

    // Se valida que el espacio no este vacio
    if(inputTarea.value === "") return;

    // nuevo elemento
    const nuevaTarea = document.createElement("article");
    nuevaTarea.classList.add("tarea")

    // Crear el parrafo
    const parrafo = document.createElement("p");
    parrafo.classList.add("titulo")
    parrafo.textContent = inputTarea.value;

    // Crear descripcion
    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion")
    if(inputDescripcion.value === ""){
        descripcion.textContent = "Sin Descripción";
    }else{
        descripcion.textContent = inputDescripcion.value;
    }

    inputDescripcion.addEventListener("input",()=>{
        inputDescripcion.style.height = "auto";
        inputDescripcion.style.height = inputDescripcion.scrollHeight + "px"
    })

    // Boton Eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("eliminar");
    botonEliminar.textContent = "Eliminar";

    // Funcion eliminar
    botonEliminar.addEventListener("click",() => {
        nuevaTarea.remove();
    });

    // Boton Editar
    const botonEditar = document.createElement("button");
    botonEditar.classList.add("editar")
    botonEditar.textContent = "Editar";

    // Funcion Editar
    botonEditar.addEventListener("click", ()=>{
        inputTarea.value = parrafo.textContent;
        nuevaTarea.remove();
    })

    // Crear checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Funcion marcar
    checkbox.addEventListener("click",()=>{
    if (checkbox.checked){ 
        parrafo.style.textDecoration = "line-through" // si esta marcado hace esto
    } else{ 
        parrafo.style.textDecoration = "none" // si no esta marcado hace esto
    }
    })

    // contenido (div para parrafo y decripcion)
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    //acciones
    const acciones = document.createElement("div");
    acciones.classList.add("acciones");

    const fecha = document.createElement("p") // no hace nada 
    fecha.textContent = "Fecha: "

    const prioridad = document.createElement("p") // no hace nada 
    prioridad.textContent = "Prioridad: "

    // contenido
    contenido.appendChild(parrafo);
    contenido.appendChild(descripcion);

    // articulo
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(contenido);
    nuevaTarea.appendChild(acciones);

    // acciones
    acciones.appendChild(fecha);
    acciones.appendChild(prioridad);
    acciones.appendChild(botonEditar);
    acciones.appendChild(botonEliminar);

    // lista
    listaTareas.appendChild(nuevaTarea);

    // limpia el formulario para la siguiente tarea (no tocar)
    inputTarea.value = "";
    inputDescripcion.value = "";


}

buttonAgregar.addEventListener("click", agregarTareas);

// creacion del nuevo contenedor para acciones (rediseño de article)
// debe tener:
// 1. fecha
// 2. prioridad: baja, medio, alta
// 3. boton editar
// 4. boton eliminar
// 5. descripcion

console.log(inputDescripcion.value);