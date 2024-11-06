// Declaramos la variable 'lletra' de tipo string con el valor inicial "a"
var lletra: string = "a";

// Declaramos la variable 'palabra' de tipo string como una cadena vacía donde se guardarán las repeticiones
let palabra: string = "";

// Definimos la función 'subida' que repetirá la letra alternando entre minúscula y mayúscula
function subida() {
    // Bucle que se ejecuta 10 veces
    for (let i = 0; i < 10; i++) {
        // Si el índice es par (i % 2 == 0), añade la letra en minúscula
        if (i % 2 == 0) {
            palabra += lletra.toLocaleLowerCase(); // Convierte la letra a minúscula y la añade a 'palabra'
        } else {
            // Si el índice es impar, añade la letra en mayúscula
            palabra += lletra.toUpperCase(); // Convierte la letra a mayúscula y la añade a 'palabra'
        }
    }
    // Muestra la palabra resultante en el párrafo con id "resultado"
    document.getElementById("resultado")!.innerText = palabra;
}

// Función que será ejecutada cuando se presione el botón
function calcula() {
    palabra = ""; // Reinicia la palabra antes de comenzar
    subida(); // Llama a la función subida para generar la palabra
}
