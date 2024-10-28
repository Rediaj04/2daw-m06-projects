"use strict";
/**
 * Esta función calcula el día de la semana a partir de una fecha ingresada por el usuario
 * en el formato dd/mm/yyyy. Si la fecha es válida, se informa el día de la semana y
 * se calcula la raíz cuadrada del número que representa el día de la semana.
 */
function diaDeLaSetmana() {
    // Obtiene el elemento de entrada (input) con el ID "data"
    let data = document.getElementById("data");
    // Recupera el valor introducido en el campo de entrada
    let valor = data.value;
    // Define una expresión regular para validar el formato dd/mm/yyyy
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    // Verifica si el valor introducido cumple con el formato especificado
    if (regex.test(valor)) {
        // Separa el valor ingresado en día, mes y año usando el carácter '/'
        const separador = valor.split('/');
        const dia = Number(separador[0]); // Convierte el primer elemento a número (día)
        const mes = Number(separador[1]); // Convierte el segundo elemento a número (mes)
        const anio = Number(separador[2]); // Convierte el tercer elemento a número (año)
        // Crear el objeto Date restando 1 al mes, ya que los meses son 0-indexados en JavaScript
        const fecha = new Date(anio, mes - 1, dia);
        // Obtiene el día de la semana (0=Domingo, 1=Lunes, ..., 6=Sábado)
        const diaSemana = fecha.getDay();
        // Muestra un mensaje al usuario con el día de la semana
        alert(`El día de la semana es: ${diaSemana}`);
        // Calcula la raíz cuadrada del número que representa el día de la semana
        const raizCuadrada = Math.sqrt(diaSemana);
        // Muestra en la consola la raíz cuadrada, formateada a dos decimales
        console.log(`La raíz cuadrada del día de la semana (${diaSemana}) es: ${raizCuadrada.toFixed(2)}`);
    }
    else {
        // Si el formato no es correcto, muestra un mensaje de error en la consola
        console.log(`El valor "${valor}" NO tiene el formato correcto dd/mm/yyyy.`);
    }
}
