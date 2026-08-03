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
    parrafo.textContent = inputTarea.value;

    // Crear descripcion
    const descripcion = document.createElement("p");
    if(inputDescripcion.value === ""){
        descripcion.textContent = "Sin Descripción";
    }else{
        descripcion.textContent = inputDescripcion.value;
    }
    descripcion.style.color = "red";
    descripcion.style.fontSize = "30px";


    // Boton Eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // Funcion eliminar
    botonEliminar.addEventListener("click",() => {
        nuevaTarea.remove();
    });

    // Boton Editar
    const botonEditar = document.createElement("button");
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

    //acciones
    const acciones = document.createElement("div");
    acciones.classList.add("acciones");

    const fecha = document.createElement("p")
    fecha.textContent = "Fecha: "

    const prioridad = document.createElement("p")
    prioridad.textContent = "Prioridad: "


    // articulo
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(parrafo);
    nuevaTarea.appendChild(descripcion);
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