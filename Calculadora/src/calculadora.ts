let pantallaValor = "";

let pantalla = document.getElementById("pantalla") as HTMLInputElement;
pantalla 

function actualizarPantalla() {
    pantalla.value = pantallaValor;
}

function add(valor: string): void {
    pantallaValor += valor;
    actualizarPantalla();
}

function calcular(): void {
    try {
        let resultado = eval(pantallaValor);
        if (resultado == Infinity || resultado == -Infinity || isNaN(resultado)) {
            throw new Error("Error");
        } 
        pantallaValor = resultado.toString();
        actualizarPantalla();
    } catch (Error) {
        pantallaValor = "Error";
        actualizarPantalla();
    }
}

function borrar(): void {
    pantallaValor = "";
    actualizarPantalla();
} 
