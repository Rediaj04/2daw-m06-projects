import Client from './Client.js';
import Comanda from './Comanda.js';

class GestioRecursos<T> {
    private recursos: T[] = [];

    public añadirRecurso(recurso: T): void {
        this.recursos.push(recurso);
    }

    public mostrarRecursos(): void {
        this.recursos.forEach(recurso => {
            if (recurso instanceof Comanda) {
                console.log("");
            } else if (recurso instanceof Client){
                console.log("");
            } else (console.log(""))
        });
    }
}