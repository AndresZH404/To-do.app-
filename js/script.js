const inputTarea = document.querySelector(".input-tarea")

const buttonAgregar = document.querySelector(".button-agregar")

const listaTareas = document.querySelector(".lista-tareas")

function agregarTareas(event){
    event.preventDefault();

    // Se valida que el espacio no este vacio
    if(inputTarea.value === "") return;

    // nuevo elemento
    const nuevaTarea = document.createElement("article");

    // Crear el parrafo
    const parrafo = document.createElement("p");
    parrafo.textContent = inputTarea.value;

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

    // Agregar elementos al articulo
    // parrafo
    nuevaTarea.appendChild(parrafo);
    //eliminar tarea
    nuevaTarea.appendChild(botonEliminar);
    //editar tarea
    nuevaTarea.appendChild(botonEditar);

    // articulo
    listaTareas.appendChild(nuevaTarea);


    inputTarea.value = "";
}

buttonAgregar.addEventListener("click", agregarTareas);

// Parte 1 ✅
// 1. Crear boton Eliminar
// 1. Crear funcion eliminar
// 3. al hacer click en "eliminar" borra el elemento deseado

// Parte 2 ✅
// 1. Crear boton Editar
// 1. Crear funcion Ediat
// 3. al hacer click en "Editar" modifica el elemento deseado

