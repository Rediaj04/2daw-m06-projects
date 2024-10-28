// Selección de elementos del DOM
let titulo: HTMLElement = document.getElementById("titulo")!;
let boton: HTMLElement = document.getElementById("cambiarColorBtn")!;
let agregarElementoBtn: HTMLElement = document.getElementById("agregarElementoBtn")!;
let eliminarElementoBtn: HTMLElement = document.getElementById("eliminarElementoBtn")!;
let lista: HTMLElement = document.getElementById("listaElementos")!;
let negrillas: HTMLInputElement = <HTMLInputElement>document.getElementById("cbox1")!;
let subrayar: HTMLInputElement = <HTMLInputElement>document.getElementById("cbox2")!;
let curvado: HTMLInputElement = <HTMLInputElement>document.getElementById("cbox3")!;
let normal: HTMLInputElement = <HTMLInputElement>document.getElementById("cbox4")!;
let musica: HTMLAudioElement = <HTMLAudioElement>document.getElementById("musica")!;
let musicaBtn: HTMLElement = document.getElementById("musicaBtn")!;

// Cambia el color del título al hacer clic en el botón
boton.addEventListener("click", () => {
    titulo.style.color = titulo.style.color === "red" ? "#ffcc00" : "red"; // Alterna entre rojo y amarillo
});

// Función para aplicar estilos a la lista según las casillas de verificación
function alterStyle() {
    lista.style.fontWeight = negrillas.checked ? 'bold' : 'normal'; // Negritas
    lista.style.textDecoration = subrayar.checked ? 'underline' : 'none'; // Subrayar
    lista.style.fontStyle = curvado.checked ? 'italic' : 'normal'; // Estilo curvado

    // Normaliza estilos si se selecciona la opción "Normal"
    if (normal.checked) {
        lista.style.fontWeight = 'normal';
        lista.style.textDecoration = 'none';
        lista.style.fontStyle = 'normal';
        negrillas.checked = false; // Desmarcar otros
        subrayar.checked = false;
        curvado.checked = false;
    }
}

// Evento para cambiar el estilo al marcar la casilla
negrillas.addEventListener("change", alterStyle);
subrayar.addEventListener("change", alterStyle);
curvado.addEventListener("change", alterStyle);
normal.addEventListener("change", alterStyle);

// Función para agregar un nuevo elemento con el texto ingresado en el input
function addToList(texto: string) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = texto;  // Añadir el texto del input como contenido del nuevo elemento
    lista.append(nuevoElemento);
}

// Función para eliminar un elemento específico de la lista por su contenido
function removeSpecificElement(texto: string) {
    let elementos = lista.getElementsByTagName("li");
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].innerText === texto) {
            lista.removeChild(elementos[i]);
            break; // Salir del bucle después de eliminar el elemento
        }
    }
}

// Verifica el texto ingresado en el campo antes de agregar a la lista
agregarElementoBtn.addEventListener("click", () => {
    let nuevoElementoInput: HTMLInputElement = <HTMLInputElement>document.getElementById("nuevoElemento")!;
    if (nuevoElementoInput.value.trim() === "") {
        alert("Por favor, escribe un texto para agregar a la lista."); // Mensaje de advertencia
    } else {
        addToList(nuevoElementoInput.value.trim()); // Agregar texto
        nuevoElementoInput.value = ""; // Limpiar el campo de texto
    }
});

// Verifica el texto ingresado en el campo antes de eliminar de la lista
eliminarElementoBtn.addEventListener("click", () => {
    let elementoEliminarInput: HTMLInputElement = <HTMLInputElement>document.getElementById("elementoEliminar")!;
    if (elementoEliminarInput.value.trim() === "") {
        alert("Por favor, escribe el texto del elemento que deseas eliminar."); // Mensaje de advertencia
    } else {
        removeSpecificElement(elementoEliminarInput.value.trim()); // Eliminar texto
        elementoEliminarInput.value = ""; // Limpiar el campo de texto
    }
});

// Alterna la música entre reproducir y pausar
function toggleMusica() {
    if (musica.paused) {
        musica.play(); // Reproducir música
        musicaBtn.textContent = "Pausar Música"; // Cambiar texto del botón
    } else {
        musica.pause(); // Pausar música
        musicaBtn.textContent = "Reproducir Música"; // Cambiar texto del botón
    }
}
