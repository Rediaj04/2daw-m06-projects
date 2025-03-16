import Client from './Client.js';
import Comanda from './Comanda.js';
export var ca_david;
(function (ca_david) {
    //Objecte literal que no canviarà
    let restaurant = {
        nom: "Ca David",
        ubicacio: "Barcelona",
        plats: [
            { nom: "Espagueti a la carbonara", preu: 9 },
            { nom: "Escalopa de vedella amb guarnició", preu: 12 },
            { nom: "Pastís de formatge", preu: 7 }
        ]
    };
    //Llistes d'objectes per emmagatzemar
    let llistaClients = [];
    let llistaComandes = [];
    //Funció per carregar dades inicials
    function inicialitzacio() {
        mostrarRestaurant(restaurant);
        mostrarClients(llistaClients);
        mostrarComandes(llistaComandes);
    }
    ca_david.inicialitzacio = inicialitzacio;
    //Mostra l'objecte literal del restaurant, especifiquem que serà de tipus restaurant
    function mostrarRestaurant(rest) {
        const restaurantContainer = document.getElementById("restaurant");
        restaurantContainer.textContent = "";
        if (rest) {
            //Creem dues capçalares amb el nom i la ubicació
            let nom = document.createElement("h2");
            nom.textContent = rest.nom;
            let ubicacio = document.createElement("h3");
            ubicacio.textContent = rest.ubicacio;
            //Creem una taula per mostrar les dades
            const table = document.createElement("table");
            const header = document.createElement("tr");
            header.innerHTML = "<th>Plats</th>";
            table.appendChild(header);
            //Per cada plat, afegim una fila
            rest.plats.forEach(plat => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${plat.nom} : ${plat.preu} €</td>`;
                table.appendChild(row);
            });
            //Afegim tots els elements al contenidor
            restaurantContainer.appendChild(nom);
            restaurantContainer.appendChild(ubicacio);
            restaurantContainer.appendChild(table);
        }
        else {
            let nom = document.createElement("h2");
            nom.textContent = "El restaurant no està obert";
            restaurantContainer.append(nom);
        }
    }
    //Mostra la llista de clients que rep per paràmetre
    function mostrarClients(clients) {
        const clientsContainer = document.getElementById("clients");
        clientsContainer.textContent = "";
        if (clients) {
            //Creem dues capçalares amb el nom 
            let nom = document.createElement("h2");
            nom.textContent = "Clients";
            //Creem una taula per mostrar les dades
            const table = document.createElement("table");
            const header = document.createElement("tr");
            header.innerHTML = "<th>Dades</th>";
            table.appendChild(header);
            //Per cada client, afegim una fila
            clients.forEach(client => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${client.nom},${client.cognoms} -> ${client.getDni} - ${client.getCredit}</td>`;
                table.appendChild(row);
            });
            //Afegim tots els elements al contenidor
            clientsContainer.appendChild(nom);
            clientsContainer.appendChild(table);
        }
    }
    //Mostra la llista de comandes que rep per paràmetre
    function mostrarComandes(comandes) {
        const comandesContainer = document.getElementById("comandes");
        comandesContainer.textContent = "";
        if (comandes) {
            //Creem dues capçalares amb el nom 
            let nom = document.createElement("h2");
            nom.textContent = "Comandes";
            //Creem una taula per mostrar les dades
            const table = document.createElement("table");
            const header = document.createElement("tr");
            header.innerHTML = "<th>Dades</th>";
            table.appendChild(header);
            //Per cada comanda, afegim una fila
            comandes.forEach(comanda => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${comanda.getId}-${comanda.plats}</td>`;
                table.appendChild(row);
            });
            comandesContainer.appendChild(nom);
            comandesContainer.appendChild(table);
        }
    }
    //Rep l'objecte literal del restaurant i per cada plat, suma el seu preu
    function preuTotalPlats(rest) {
        return rest.plats.reduce((total, plat) => total + plat.preu, 0);
    }
    //Afegeix un nou plat a l'objecte literal
    function afegirPlat() {
        const input = document.getElementById("plat");
        if (input.value.includes(",")) {
            const value = input.value.split(",");
            input.value = "";
            restaurant.plats.push({ nom: value[0], preu: Number(value[1]) });
            //Utilitzem la funció de mostrar restaurant per actualitzar les dades
            mostrarRestaurant(restaurant);
        }
    }
    ca_david.afegirPlat = afegirPlat;
    //Afegim un client nou a la llista
    function afegirClient() {
        const input = document.getElementById("client");
        let client = input.value.split(",");
        llistaClients.push(new Client(client[0], client[1], client[2], Number(client[3])));
        //Utilitzem la funció de mostrar clients per actualitzar les dades
        mostrarClients(llistaClients);
        input.value = "";
    }
    ca_david.afegirClient = afegirClient;
    //Afegim una comanda nova a la llista
    function afegirComanda() {
        const input = document.getElementById("comanda");
        let comanda = input.value.split(",");
        //Comprovem que el plat o plats estan a l'objecte literal, primer transformant per obtenir només els noms
        const platsRestaurant = restaurant.plats.map((plat) => plat.nom);
        //Variable de control per afegir els plats
        let potAfegir = true;
        comanda.forEach(nomPlat => {
            //Si troba algun plat que no hi és, no es podrà afegir
            if (!platsRestaurant.includes(nomPlat)) {
                potAfegir = false;
                input.value = "";
                alert("Algun plat no està disponible");
            }
        });
        //Si es pot afegir, el guardem a la llista i utilitzem la funció de mostrar comandes per actualitzar les dades
        if (potAfegir) {
            llistaComandes.push(new Comanda(input.value));
            mostrarComandes(llistaComandes);
            input.value = "";
        }
    }
    ca_david.afegirComanda = afegirComanda;
    //Afegim una comanda existent a client
    function afegirComandaClient() {
        const input = document.getElementById("comandaClient");
        let comandaClient = input.value.split(",");
        //Busquem l'objecte que correspon amb el ID de comanda i el DNI de client
        let comanda = llistaComandes.find(comanda => comanda.getId() === comandaClient[0]);
        let client = llistaClients.find(client => client.getDni == comandaClient[1]);
        //Si existeixen, afegim al client la comanda
        if (comanda && client) {
            client.afegirComanda(comanda);
            input.value = "";
        }
        else {
            input.value = "";
            alert("El client o la comanda no existeixen");
        }
    }
    ca_david.afegirComandaClient = afegirComandaClient;
    //Mostra les comandes que te un client
    function mostrarComandesClient() {
        const comandesClientContainer = document.getElementById("comandesClient");
        comandesClientContainer.textContent = "";
        const input = document.getElementById("dniClient");
        //Busquem el client que té aquest DNI
        let client = llistaClients.find(client => client.getDni == input.value);
        //Si troba el client i te comandes, les mostra
        if (client && client.comandes.length > 0) {
            let nom = document.createElement("h2");
            nom.textContent = "Comandes Client " + client.nom;
            const table = document.createElement("table");
            const header = document.createElement("tr");
            header.innerHTML = "<th>Dades</th>";
            table.appendChild(header);
            client.comandes.forEach(comanda => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${comanda.getId}-${comanda.plats}</td>`;
                table.appendChild(row);
            });
            comandesClientContainer.appendChild(nom);
            comandesClientContainer.appendChild(table);
            input.value = "";
        }
        else {
            input.value = "";
            alert("El client no existeix o no té comandes");
        }
    }
    ca_david.mostrarComandesClient = mostrarComandesClient;
})(ca_david || (ca_david = {}));
//# sourceMappingURL=index.js.map