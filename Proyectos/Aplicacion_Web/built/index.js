"use strict";
// Listas iniciales de clientes y productos
const clientes = [
    { nombre: "Juan", email: "juan@gmail.com" },
    { nombre: "Maria", email: "maria@yahoo.com" },
    { nombre: "Carlos", email: "carlos@hotmail.com" },
    { nombre: "PPLuar", email: "loshotmail.com" },
    { nombre: "Leandro", email: "lasapa@gmail.com" },
];
const productos = [];
function añadirProducto(nombre, plataforma) {
    if (plataforma) {
        productos.push({ nombre, plataforma });
    }
    else {
        productos.push({ nombre });
    }
}
// Inicializa la página al cargar
function iniciarPagina() {
    cargarClientes();
    cargarProductosIniciales();
}
// Carga y muestra la lista de clientes
function cargarClientes() {
    const lista = document.getElementById("listaClientes");
    if (lista) {
        lista.innerHTML = ""; // Limpia la lista antes de añadir nuevos elementos
        clientes.forEach(cliente => {
            if (esEmailValido(cliente.email)) {
                const li = document.createElement("li");
                li.textContent = `${cliente.nombre} - ${cliente.email}`;
                lista.appendChild(li);
            }
        });
    }
}
// Valida un correo electrónico usando una función flecha
const esEmailValido = (email) => email.includes("@");
// Carga varios productos iniciales
function cargarProductosIniciales() {
    añadirProducto("El Padrino");
    añadirProducto("The Legend of Zelda", "Nintendo");
    añadirProducto("Titanic");
    añadirProducto("La Caperucita Verde");
    añadirProducto("Black Forever");
    añadirProducto("Las increíbles venturas del gato azul", "Play1");
}
// Agrega un nuevo producto a la lista
function agregarProducto() {
    const input = document.getElementById("inputProducto");
    if (input) {
        const valor = input.value.trim(); // Obtiene el valor del input y elimina espacios extra
        if (valor) {
            if (valor.includes(",")) {
                const [nombre, plataforma] = valor.split(",").map(v => v.trim());
                añadirProducto(nombre, plataforma);
            }
            else {
                añadirProducto(valor);
            }
            alert("Producto añadido correctamente.");
            input.value = ""; // Limpia el campo de texto
        }
        else {
            alert("Por favor, introduce un nombre válido.");
        }
    }
}
// Muestra la lista de productos según el tipo seleccionado
function mostrar(tipo) {
    const tabla = document.getElementById("tablaProductos");
    if (tabla) {
        tabla.innerHTML = ""; // Limpia la tabla antes de mostrar nuevos datos
        const encabezado = tabla.insertRow();
        if (tipo === "peliculas") {
            encabezado.innerHTML = "<th>Películas</th>";
        }
        else if (tipo === "videojuegos") {
            encabezado.innerHTML = "<th>Videojuegos</th>";
        }
        else if (tipo === "ambos") {
            encabezado.innerHTML = "<th>Películas</th><th>Videojuegos</th>";
        }
        if (tipo === "peliculas") {
            productos.filter(p => !p.plataforma).forEach(p => {
                const fila = tabla.insertRow();
                fila.innerHTML = `<td>${p.nombre}</td>`;
            });
        }
        if (tipo === "videojuegos") {
            productos.filter(p => p.plataforma).forEach(p => {
                const fila = tabla.insertRow();
                fila.innerHTML = `<td>${p.nombre} - <b>${p.plataforma}</b></td>`;
            });
        }
        if (tipo === "ambos") {
            const peliculas = productos.filter(p => !p.plataforma);
            const videojuegos = productos.filter(p => p.plataforma);
            const maxFilas = Math.max(peliculas.length, videojuegos.length);
            for (let i = 0; i < maxFilas; i++) {
                const fila = tabla.insertRow();
                const pelicula = peliculas[i] ? `<td>${peliculas[i].nombre}</td>` : "<td></td>";
                const videojuego = videojuegos[i]
                    ? `<td>${videojuegos[i].nombre} - <b>${videojuegos[i].plataforma}</b></td>`
                    : "<td></td>";
                fila.innerHTML = `${pelicula}${videojuego}`;
            }
        }
    }
}
