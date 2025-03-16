import Persona from './Persona.js';
class Treballador extends Persona {
    constructor(nom, cognoms, dni, torn, carrec) {
        super(nom, cognoms, dni);
        this.torn = torn;
        this.carrec = carrec;
    }
    mostrarInformacio() {
        super.mostrarInformacio();
        console.log("Torn i càrrec: " + this.torn + " " + this.carrec);
    }
}
//# sourceMappingURL=Treballador.js.map