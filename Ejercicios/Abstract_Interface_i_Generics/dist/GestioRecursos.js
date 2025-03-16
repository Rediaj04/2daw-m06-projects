import Client from './Client.js';
import Comanda from './Comanda.js';
class GestioRecursos {
    constructor() {
        this.recursos = [];
    }
    añadirRecurso(recurso) {
        this.recursos.push(recurso);
    }
    mostrarRecursos() {
        this.recursos.forEach(recurso => {
            if (recurso instanceof Comanda) {
                console.log("");
            }
            else if (recurso instanceof Client) {
                console.log("");
            }
            else
                (console.log(""));
        });
    }
}
//# sourceMappingURL=GestioRecursos.js.map