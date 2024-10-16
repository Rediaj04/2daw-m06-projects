let titulo: HTMLElement = document.getElementById("titulo")!;
let boton: HTMLElement = document.getElementById("cambiarColorBtn")!;
let agregarElementoBtn: HTMLElement = document.getElementById("agregarElementoBtn")!;
let eliminarElementoBtn: HTMLElement = document.getElementById("eliminarElementoBtn")!;
let lista: HTMLElement = document.getElementById("listaElementos")!;
let negrillas: HTMLElement = document.getElementById("cbox1")!;



// Cambia el color del título al hacer clic en el botón
boton.addEventListener("click", () => {
    titulo.style.color = "#ff0000"; 
});

// Funcion para poner negrillas
function alterStyle(click){
    click.style.backgroun = 'green';
}

// Función para agregar un nuevo elemento con el texto ingresado en el input
function addToList(texto: string) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = texto;  // Añadir el texto del input como contenido del nuevo elemento
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
    let inputValor = (document.getElementById("nuevoElemento") as HTMLInputElement).value;
    addToList(inputValor);  // Añadir el texto del input a la lista
    (document.getElementById("nuevoElemento") as HTMLInputElement).value = "";  // Limpiar el input
});

// Evento para eliminar el último elemento de la lista
eliminarElementoBtn.addEventListener("click", () => {
    removeFromList();
});
