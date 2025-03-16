"use strict";
var _a;
// Clase Cliente
class Cliente {
    constructor(nombre, fechaNacimiento, email, password, peliculaFavorita, generosFavoritos) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.password = password;
        this.peliculaFavorita = peliculaFavorita;
        this.generosFavoritos = generosFavoritos;
    }
}
// Map que contiene clientes y sus emails
const clients = new Map([
    ["Anna", "anna@example.com"],
    ["Joan", "joan@example.com"],
    ["Maria", "invalidemail"],
]);
// Arrays para películas y videojuegos
const movies = [];
const games = [];
// Función para validar emails
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Función para mostrar clientes
function mostrarClients(clients) {
    const clientList = document.getElementById("clientList");
    clientList.innerHTML = "";
    clients.forEach((value, key) => {
        if (isValidEmail(value)) {
            const li = document.createElement("li");
            li.textContent = `${key}: ${value}`;
            clientList.appendChild(li);
        }
    });
}
// Función para agregar productos (películas o videojuegos)
function afegirProducte(productName, platform) {
    const input = document.getElementById("itemInput");
    const value = productName ? `${productName}${platform ? `,${platform}` : ""}` : input.value.trim();
    input.value = "";
    if (value.includes(",")) {
        const [gameName, gamePlatform] = value.split(",").map(v => v.trim());
        if (gameName && gamePlatform) {
            games.push(gameName + "," + gamePlatform);
        }
    }
    else if (value) {
        movies.push(value);
    }
}
// Función para mostrar datos en la tabla
function mostrarDades(tipus) {
    switch (tipus) {
        case "Películas":
            escriureTaula(tipus, movies);
            break;
        case "Videojuegos":
            escriureTaula(tipus, games);
            break;
        default:
            escriureTaula("", movies, games);
            break;
    }
}
// Función para escribir en la tabla HTML
function escriureTaula(titol, objectes, objectes2) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const header = document.createElement("tr");
    header.innerHTML = objectes2 ? "<th>Películas</th><th>Videojuegos</th>" : "<th>" + titol + "</th>";
    table.appendChild(header);
    const maxLength = Math.max(objectes.length, objectes2 ? objectes2.length : 0);
    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement("tr");
        row.innerHTML = objectes2 ? `<td>${objectes[i] || ""}</td><td>${objectes2[i] || ""}</td>` : `<td>${objectes[i]}</td>`;
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}
// Función para manejar el registro de clientes
function manejarRegistro(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const peliculaFavorita = document.getElementById("peliculaFavorita").value;
    const generosFavoritos = Array.from(document.getElementById("generosFavoritos").selectedOptions).map(option => option.value);
    const cliente = new Cliente(nombre, fechaNacimiento, email, password, peliculaFavorita, generosFavoritos);
    // Guardar en LocalStorage
    const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    // Redirigir a la página principal
    window.location.href = "index.html";
}
// Asignar el manejador de eventos al formulario
(_a = document.getElementById("registroForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", manejarRegistro);
// Función para cargar datos al iniciar la página
function carregarDades() {
    // Agregar productos predefinidos
    afegirProducte("Final Fantasy X, PS2");
    afegirProducte("Pesadilla en Elm Street");
    // Cargar clientes predefinidos
    const clientsPredefinits = new Map([
        ["Anna", "anna@ggwp.com"],
        ["Joan", "joan@tikas.com"],
        ["Maria", "invalidemail"],
    ]);
    // Cargar clientes desde LocalStorage (si existen)
    const clientesGuardados = JSON.parse(localStorage.getItem("clientes") || "[]");
    const clientMap = new Map();
    // Agregar clientes predefinidos al mapa
    clientsPredefinits.forEach((email, nombre) => {
        clientMap.set(nombre, email);
    });
    // Agregar clientes guardados en LocalStorage al mapa
    clientesGuardados.forEach((cliente) => {
        clientMap.set(cliente.nombre, cliente.email);
    });
    // Mostrar los clientes en la página
    mostrarClients(clientMap);
}
//# sourceMappingURL=videoclub.js.map