import Persona from './Persona.js'

class Treballador extends Persona {
    public torn: string;
    private carrec: string;

    constructor(nom: string, cognoms: string, dni: string, torn: string, carrec: string) {
        super(nom, cognoms, dni);
        this.torn = torn;
        this.carrec = carrec;
    }

    public mostrarInformacio() {
        super.mostrarInformacio();
        console.log("Torn i càrrec: " + this.torn + " " + this.carrec);
    }
}