// Clase Cliente
class Cliente {
  nombre: string;
  fechaNacimiento: string;
  email: string;
  password: string;
  peliculaFavorita: string;
  generosFavoritos: string[];

  constructor(
    nombre: string,
    fechaNacimiento: string,
    email: string,
    password: string,
    peliculaFavorita: string,
    generosFavoritos: string[]
  ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.password = password;
    this.peliculaFavorita = peliculaFavorita;
    this.generosFavoritos = generosFavoritos;
  }
}

// Map que contiene clientes y sus emails
const clients: Map<string, string> = new Map<string, string>([
  ["Anna", "anna@example.com"],
  ["Joan", "joan@example.com"],
  ["Maria", "invalidemail"],
]);

// Arrays para películas y videojuegos
const movies: string[] = [];
const games: string[] = [];

// Función para validar emails
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Función para mostrar clientes
function mostrarClients(clients: Map<string, string>): void {
  const clientList = document.getElementById("clientList")!;
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
function afegirProducte(productName?: string, platform?: string): void {
  const input = document.getElementById("itemInput") as HTMLInputElement;
  const value = productName ? `${productName}${platform ? `,${platform}` : ""}` : input.value.trim();
  input.value = "";

  if (value.includes(",")) {
    const [gameName, gamePlatform] = value.split(",").map(v => v.trim());
    if (gameName && gamePlatform) {
      games.push(gameName + "," + gamePlatform);
    }
  } else if (value) {
    movies.push(value);
  }
}

// Función para mostrar datos en la tabla
function mostrarDades(tipus?: string): void {
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
function escriureTaula(titol: string, objectes: string[], objectes2?: string[]) {
  const tableContainer = document.getElementById("tableContainer")!;
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
function manejarRegistro(event: Event): void {
  event.preventDefault();

  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const fechaNacimiento = (document.getElementById("fechaNacimiento") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  const peliculaFavorita = (document.getElementById("peliculaFavorita") as HTMLInputElement).value;
  const generosFavoritos = Array.from((document.getElementById("generosFavoritos") as HTMLSelectElement).selectedOptions).map(option => option.value);

  const cliente = new Cliente(nombre, fechaNacimiento, email, password, peliculaFavorita, generosFavoritos);

  // Guardar en LocalStorage
  const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  // Redirigir a la página principal
  window.location.href = "index.html";
}

// Asignar el manejador de eventos al formulario
document.getElementById("registroForm")?.addEventListener("submit", manejarRegistro);

// Función para cargar datos al iniciar la página
function carregarDades(): void {
  // Agregar productos predefinidos
  afegirProducte("Final Fantasy X, PS2");
  afegirProducte("Pesadilla en Elm Street");

  // Cargar clientes predefinidos
  const clientsPredefinits: Map<string, string> = new Map<string, string>([
    ["Anna", "anna@ggwp.com"],
    ["Joan", "joan@tikas.com"],
    ["Maria", "invalidemail"],
  ]);

  // Cargar clientes desde LocalStorage (si existen)
  const clientesGuardados = JSON.parse(localStorage.getItem("clientes") || "[]");
  const clientMap = new Map<string, string>();

  // Agregar clientes predefinidos al mapa
  clientsPredefinits.forEach((email, nombre) => {
    clientMap.set(nombre, email);
  });

  // Agregar clientes guardados en LocalStorage al mapa
  clientesGuardados.forEach((cliente: Cliente) => {
    clientMap.set(cliente.nombre, cliente.email);
  });

  // Mostrar los clientes en la página
  mostrarClients(clientMap);
}
