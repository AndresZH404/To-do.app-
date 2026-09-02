const inputTarea = document.querySelector(".input-tarea");

const inputDescripcion = document.querySelector(".input-descripcion");

const buttonFecha = document.querySelector(".button-fecha");

const inputFecha = document.querySelector(".input-fecha");

const inputPrioridad = document.querySelector(".input-prioridad");

const buttonAgregar = document.querySelector(".button-agregar");

const listaTareas = document.querySelector(".lista-tareas");

// Cantidad Tareas
// Sidebar

const cantidadTotal = document.querySelector("#cantidad-total");

const cantidadPendientes = document.querySelector(".cantidad-pendientes");

const cantidadCompletadas = document.querySelector(".cantidad-completadas");

const cantidadFavoritas = document.querySelector(".cantidad-favoritas");


// Editar (--- TRABAJO EN PROCESO ---)
let tareaEditando = null;


// Sidebar (contadores) 
function actualizarContador(){
    const total = listaTareas.children.length;

    cantidadTotal.textContent = total;

}

function agregarTareas(event){
    event.preventDefault();

    // Se valida que el espacio no este vacio
    if(inputTarea.value === "") return;

    // Se edita solo la tarea actual
    if(tareaEditando !== null){
        
        const titulo = tareaEditando.querySelector(".titulo");
        const descripcion = tareaEditando.querySelector(".descripcion");
        const fecha = tareaEditando.querySelector(".fecha");
        const prioridad = tareaEditando.querySelector(".prioridad");

        titulo.textContent = inputTarea.value;

        if(inputDescripcion.value === ""){
            descripcion.textContent = "Sin Descripcion";
        }else{
            descripcion.textContent = inputDescripcion.value;
        }

        fecha.textContent = "fecha: " + inputFecha.value;

        prioridad.textContent = inputPrioridad.value;

        tareaEditando = null;

    } else{

     // nuevo elemento
    const nuevaTarea = document.createElement("article");
    nuevaTarea.classList.add("tarea")

    // Crear el parrafo
    const parrafo = document.createElement("p");
    parrafo.classList.add("titulo")
    parrafo.textContent = inputTarea.value;

    // Crear descripcion
    const descripcionTarea= inputDescripcion.value;

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

    // boton fecha
    const fecha = inputFecha.value;

    const fechaTarea = document.createElement("p");
    fechaTarea.classList.add("fecha");
    fechaTarea.textContent = "Fecha: " + fecha;

    // Prioridad
    const prioridad = inputPrioridad.value;

    const prioridadTarea = document.createElement("p");
    prioridadTarea.classList.add("prioridad")
    prioridadTarea.textContent = prioridad;

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
        inputTarea.value = parrafo.textContent; // modifica el titulo
        inputDescripcion.value = descripcion.textContent; // modifica la descripcion
        inputFecha.value = fecha; // modifica la fecha
        inputPrioridad.value = prioridad; // modifica la prioridad
        
        tareaEditando = nuevaTarea;
    })

    // Crear favorito
    const botonFavorito = document.createElement("button");
    botonFavorito.classList.add("favorito")
    botonFavorito.textContent = "☆"

    // Funcion Marcar como favorito
    botonFavorito.addEventListener("click",()=>{

        if(botonFavorito.textContent === "☆"){ 
            botonFavorito.textContent = "★";     // Favorito marcado
            botonFavorito.classList.add("activo") // Para css

        }else{
            botonFavorito.textContent = "☆"       // Favorito No marcado
            botonFavorito.classList.remove("activo") // Para css
        }
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

    // contenido
    contenido.appendChild(parrafo);
    contenido.appendChild(descripcion);

    // articulo
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(botonFavorito);
    nuevaTarea.appendChild(contenido);
    nuevaTarea.appendChild(acciones);

    // acciones
    acciones.appendChild(fechaTarea);
    acciones.appendChild(prioridadTarea);
    acciones.appendChild(botonEditar);
    acciones.appendChild(botonEliminar);

    // lista
    listaTareas.appendChild(nuevaTarea);
    actualizarContador();

}

    // limpia el formulario para la siguiente tarea (no tocar)
    inputTarea.value = "";
    inputDescripcion.value = "";
    inputFecha.value = "";
    inputPrioridad.value = "";

}// fin de function agregarTareas


 // Boton Agregar tarea
buttonAgregar.addEventListener("click", agregarTareas);


// Funcion agregar fecha
buttonFecha.addEventListener("click",()=>{
    inputFecha.showPicker();
})

// Funcion agregar prioridad
    // Boton prioridad


// v1.6
// articulo:
// fecha ✅
// prioridad ✅
// que guarde la Descripcion ✅
// que guarde la fecha ✅
// que guarde la prioridad ✅
// nuevaTarea
// favoritas (almenos marcarlas) ✅

// v1.6.1
// mejorar editar ✅
// Editar debe actualizar la tarea existente  ✅

// v1.6.2
// Después de editar, limpiar el formulario de Agregar tarea ✅

// v1.6.3
// solucionar que el titulo y la descripcion no se salgan ✅

// sidebar: v1.7
// Todas las tareas (contador)
// total
// pendientes
// completas
// favortias
// Eliminar

// Eliminar: v1.8
// Borrar tareas seleccionadas
// Borrar tareas completadas
// aviso: seguro de que quieres borrar estas tareas

//v1.9
// Rediseño con Css

// v2.0
// localStorage