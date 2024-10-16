"use strict";
let pantallaValor = "";
let pantalla = document.getElementById("pantalla");
pantalla;
function actualizarPantalla() {
    pantalla.value = pantallaValor;
}
function add(valor) {
    pantallaValor += valor;
    actualizarPantalla();
}
function calcular() {
    try {
        let resultado = eval(pantallaValor);
        if (resultado === Infinity || resultado === -Infinity || isNaN(resultado)) {
            throw new Error("Error");
        }
        pantallaValor = resultado.toString();
        actualizarPantalla();
    }
    catch (Error) {
        pantallaValor = "Error";
        actualizarPantalla();
    }
}
function borrar() {
    pantallaValor = "";
    actualizarPantalla();
}
