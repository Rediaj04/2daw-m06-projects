"use strict";
let titulo = document.getElementById("titulo");
let boton = document.getElementById("cambiarColorBtn");
let agregarElementoBtn = document.getElementById("agregarElementoBtn");
let eliminarElementoBtn = document.getElementById("eliminarElementoBtn");
let lista = document.getElementById("listaElementos");
// Cambia el color del título al hacer clic en el botón
boton.addEventListener("click", () => {
    titulo.style.color = "#ff0000";
});
// Función para agregar un nuevo elemento con el texto ingresado en el input
function addToList(texto) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = texto; // Añadir el texto del input como contenido del nuevo elemento
    lista.append(nuevoElemento);
}
// Función para eliminar el último elemento de la lista
function removeFromList() {
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}
// Evento para agregar el contenido del input a la lista
agregarElementoBtn.addEventListener("click", () => {
    let inputValor = document.getElementById("nuevoElemento").value;
    addToList(inputValor); // Añadir el texto del input a la lista
    document.getElementById("nuevoElemento").value = ""; // Limpiar el input
});
// Evento para eliminar el último elemento de la lista
eliminarElementoBtn.addEventListener("click", () => {
    removeFromList();
});
