"use strict";
// Función que carga las preferencias de idioma y color de fondo desde localStorage
function carregar() {
    // Recupera el idioma y el color de fondo almacenados en localStorage
    const idioma = localStorage.getItem('idioma');
    const fondocolor = localStorage.getItem("fondocolor");
    // Selecciona los elementos que serán modificados
    const h1 = document.getElementById("header");
    const p = document.getElementById("paragraph");
    // Aplica los cambios de idioma en el encabezado y el párrafo si los elementos existen
    if (h1 && p) {
        if (idioma === "Catalan") {
            h1.innerHTML = "Text en català";
            p.innerHTML = "Per veure els canvis, actualitzar la pàgina.";
        }
        else if (idioma === "Castellano") {
            h1.innerHTML = "Texto en castellano";
            p.innerHTML = "Para ver los cambios, actualizar la página.";
        }
        else if (idioma === "Ingles") {
            h1.innerHTML = "Text in English";
            p.innerHTML = "To see the changes, refresh the page.";
        }
    }
    // Aplica el color de fondo si se ha seleccionado un color válido
    if (fondocolor) {
        document.body.style.backgroundColor = fondocolor;
    }
}
