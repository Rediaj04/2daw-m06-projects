import Persona from './Persona.js';
export default class Client extends Persona {
    constructor(nom, cognoms, dni, credit) {
        super(nom, cognoms, dni);
        this._credit = credit;
        this.comandes = [];
        this.tipo = "";
    }
    get getCredit() {
        return this._credit;
    }
    getId() {
        return "";
    }
    set setCredit(credit) {
        this._credit = credit;
    }
    //Rep una comanda i la guarda a la llista de la instancia
    afegirComanda(comanda) {
        this.comandes.push(comanda);
    }
    //Mostra les comandes de la instancia
    mostrarComandes() {
        let resultat = "";
        this.comandes.forEach(comanda => {
            resultat += comanda.plats + "\n";
        });
        return resultat;
    }
    mostrarInformacio() {
        console.log("Comandes: " + this.comandes.length);
    }
}
//# sourceMappingURL=Client.js.map