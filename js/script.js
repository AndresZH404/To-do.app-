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

    // Agregar elementos al articulo
    // marcar tarea
    nuevaTarea.appendChild(checkbox);
    // parrafo
    nuevaTarea.appendChild(parrafo);
    //editar tarea
    nuevaTarea.appendChild(botonEditar);
    //eliminar tarea
    nuevaTarea.appendChild(botonEliminar);

    // articulo
    listaTareas.appendChild(nuevaTarea);


    inputTarea.value = "";
}

buttonAgregar.addEventListener("click", agregarTareas);

// Parte 1 ✅
// 1.Crear el checkbox
// 2.Que modifique la apariencia del parrafo si esta marcado
// 3.Si no esta marcano no modifica nada
// 4.que interactue con el parrafo
// 5. que funcione
