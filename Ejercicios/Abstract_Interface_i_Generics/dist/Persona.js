export default class Persona {
    constructor(nom, cognoms, dni) {
        this.nom = nom;
        this.cognoms = cognoms;
        this._dni = dni;
    }
    get getDni() {
        return this._dni;
    }
    set setDni(dni) {
        this._dni = dni;
    }
}
//# sourceMappingURL=Persona.js.map